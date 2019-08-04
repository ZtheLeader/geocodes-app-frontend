# Geocoding [Frontend] CRUD App in Reactjs
Demo: https://reverse-geocodes-app-react.web.app/

## App Info
React Geocoding is a simple React + Node.js application that shows a map and markers on it. User is able to view, create, edit and delete these markers. All the changes are immediately visible on the map. It's a simple CRUD application for learning and extending. This one is a front-end Reactjs repo.

## Getting Started
0. Set your `ApiKey` and backend app `BASE_URL` in `src/core/Constants.js`.
1. Backend app must be running in order for front-end to work properly. Go to [geocode-map-app-backend](https://github.com/ZtheLeader/react-geocodes-map-app-backend) and read `README.md` file there for more info.
2. Now assuming that you have a running back-end app, run `yarn install` or `npm install` in front-end app directory.
3. `yarn start` or `npm start`. It will run the app in the development mode and open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. `yarn test` or `npm test` runs all the unit tests in `src/tests` folder.
5. Run `yarn run build` or `npm run build` for build.

**Note:** Adding a `Maps JavaScript API` & `Geocoding API` enabled Google maps `ApiKey` in `src/core/Constants.js` is heavily recommended. The Geocodes API of Google requires it and Google Map will also need an `ApiKey` to run in `!development` mode. <br> More info: https://developers.google.com/maps/documentation/geocoding/get-api-key

## Libraries information

1. For UI, [React Material UI](https://material-ui.com/) is used.
2. For reverse geocoding -converting the address input into coordinates(lat, lng), [react-geocode](https://github.com/shukerullah/react-geocode) is used. This module uses [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro) and requires an API key for purposes of quota management.
3. [google-map-react](https://github.com/google-map-react/google-map-react) This package allows you to render any React component on the Google Map. It is fully isomorphic and can render on a server. Additionally, it can render map components in the browser even if the Google Maps API is not loaded. It uses an internal, tweakable hover algorithm - every object on the map can be hovered.
4. For API calls, I have used the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) so that we don't have to install any additional package.

## FAQ

1. > How do you handle configuration values? What if those values change?

**Ans:** The configuration values like `BASE_URL` and `ApiKey` are stored in a separate file `src/core/Constants.js`. They're imported wherever they're needed. If they change, proper checks have been implemented in API calls as well as in Google Maps components. It has been made sure that the app runs seamlessly and nothing breaks.

2. > What happens if we encounter an error with the third-party API integration?

**Ans:** Error in third-party API integration have been handled accordingly by using the exception handling.

3. > Will it also break the application, or are they handled accordingly?

**Ans:** The application won't break if there comes an error in third party API. However, providing the `apiKey` to Google Map component is recommended. Not providing the key will result in a `development mode` map. Similarly the back-end API calls have been handled by keeping the async nature of JavaScript in notice.

4. > Now we will need to change the third-party geocoder API to another one. How can we change the current solution so that we can make this change as seamless as possible? Or how will we change (or refactor) the solution so that any future changes with the third-party integration is only done in isolation?

**Ans:** Gecoder API has been implemented in this one function in `App.js` i.e: `getLatLongFromAddressAddAddressDialog()`. In order to change the third-party geocoder API, we just have to change things and implement the new API logic in this one functions. No other changes in out app are required for that i.e: the map, markers and the listings everything will stay as it is.
