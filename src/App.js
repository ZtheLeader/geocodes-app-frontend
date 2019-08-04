import React from "react";
import MapListing from "./components/MapListing";
import "./App.css";
import AddAddressDialog from "./core/AddAddressDialog";
import EditAddressDialog from "./core/EditAddressDialog";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Geocode from "react-geocode";
import Toolbar from "./core/Toolbar";
import Map from "./components/GoogleMap";
import { ApiKey } from "./core/Constants";
import {
  sendGetRequest,
  sendPostRequest,
  sendPatchRequest,
  sendDeleteRequest
} from "./Api/Api";

// set Google Maps Geocoding API for purposes of quota management. Its recommended.\
Geocode.setApiKey(ApiKey);
Geocode.enableDebug(false);

// App Class:
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: [],
      showAddModal: false,
      showEditAddress: false,
      editAddress: "",
      editID: ""
    };
  }

  componentWillMount() {
    this.fetchMaps();
  }

  fetchMaps() {
    sendGetRequest("list").then(response => {
      if (response.msg === "success") {
        this.setState({
          maps: response.data
        });
      } else {
        window.alert(response.msg);
      }
    });
  }

  getLatLongFromAddressAddAddressDialog(addressObj) {
    // Get latitude & longitude from address.
    Geocode.fromAddress(addressObj.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        if (addressObj.address !== response.results[0].formatted_address) {
          console.log(
            `Nearest address found for given address is: "${
              response.results[0].formatted_address
            }".`
          );
        }

        addressObj.coordinates.lat = lat;
        addressObj.coordinates.lng = lng;

        if (!addressObj.id) {
          // Add Address
          addressObj.id = this.state.maps ? this.state.maps.length + 1 : 1;
          let previousMaps = this.state.maps;
          previousMaps.push(addressObj);
          sendPostRequest("add", addressObj).then(response => {
            if (response.msg === "success") {
              this.setState({
                maps: response.data,
                showAddModal: false
              });
            } else {
              window.alert(response.msg);
            }
          });
        } else {
          // Edit Address
          sendPatchRequest("update", {
            id: addressObj.id,
            newData: addressObj
          }).then(response => {
            if (response.msg === "success") {
              this.setState({
                maps: response.data,
                showEditAddress: false
              });
            } else {
              window.alert(response.msg);
            }
          });
        }
      },
      error => {
        window.alert(error);
      }
    );
  }
  deleteMap(id) {
    sendDeleteRequest("remove", { data: { id: id } }).then(response => {
      if (response.msg === "success") {
        this.setState({
          maps: response.data
        });
      } else {
        window.alert(response.msg);
      }
    });
  }

  handleNewAddress(address) {
    let newLocation = {
      address: address,
      coordinates: {
        lat: "",
        lng: ""
      }
    };
    this.getLatLongFromAddressAddAddressDialog(newLocation);
    this.setState({
      showAddModal: false
    });
  }

  handleEditAddress(addressObj) {
    this.getLatLongFromAddressAddAddressDialog(addressObj);
  }

  addAddressToggle() {
    this.setState({
      showAddModal: !this.state.showAddModal
    });
  }
  editAddressToggle(address, id) {
    this.setState({
      editAddress: address,
      editID: id,
      showEditAddress: !this.state.showEditAddress
    });
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={3} height="100%">
          <Grid item xs={12}>
            <Paper>
              <Toolbar
                onClick={this.addAddressToggle.bind(this)}
                title={"🌍 My Geocoding App 🌍"}
              />
              {this.state.showAddModal && (
                <AddAddressDialog
                  addAddressToggle={this.addAddressToggle.bind(this)}
                  handleNewAddress={this.handleNewAddress.bind(this)}
                />
              )}
              {this.state.showEditAddress && (
                <EditAddressDialog
                  editAddressToggle={this.editAddressToggle.bind(this)}
                  handleEditAddress={this.handleEditAddress.bind(this)}
                  address={this.state.editAddress}
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={6} style={{ height: "700px" }}>
            <Map markers={this.state.maps} />
          </Grid>
          <Grid item xs={6} style={{ maxHeight: "700px" }}>
            <Paper>
              <MapListing
                maps={this.state.maps}
                onDelete={this.deleteMap.bind(this)}
                onEdit={this.editAddressToggle.bind(this)}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
