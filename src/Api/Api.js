// GET
import { BASE_URL } from "./../core/Constants";

const sendGetRequest = url => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  return fetch(`${BASE_URL}/${url}`, options)
    .then(r => {
      if (r.status === 200) {
        return r.json();
      }
    })
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));
};

const sendPostRequest = (url, data) => {
  // POST
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data })
  };

  return fetch(`${BASE_URL}/${url}`, options)
    .then(r => {
      if (r.status === 200) {
        return r.json();
      }
    })
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));
};

const sendPatchRequest = (url, data) => {
  // PATCH
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };

  return fetch(`${BASE_URL}/${url}`, options)
    .then(r => {
      if (r.status === 200) {
        return r.json();
      }
    })
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));
};

const sendDeleteRequest = (url, data) => {
  // POST
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };

  return fetch(`${BASE_URL}/${url}`, options)
    .then(r => {
      if (r.status === 200) {
        return r.json();
      }
    })
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));
};

export { sendGetRequest, sendPostRequest, sendPatchRequest, sendDeleteRequest };
