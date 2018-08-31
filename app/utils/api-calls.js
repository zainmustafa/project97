import { handleApiErrors } from "./api-errors";
export const API_BASE_URL = "http://localhost:1337/api";

function processRequest(request) {
  return request
    .then(response => handleApiErrors(response))
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      console.log("catching error");
      console.log(error);
      throw error.status;
    });
}

export function get(path, token, fromService = false) {
  if (!fromService) {
    const API_REQ_URL = `${API_BASE_URL}/${path}`;
    const request = fetch(API_REQ_URL, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`
      }
    });
    return processRequest(request);
  } else {
    const request = fetch(path, {
      method: "GET"
    });
    return processRequest(request);
  }
}

export function post(path, obj) {
  const API_REQ_URL = `${API_BASE_URL}/${path}`;
  const request = fetch(API_REQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${token}`
    },
    body: JSON.stringify(obj)
  });
  return processRequest(request);
}

export function del(path, obj) {
  const API_REQ_URL = `${API_BASE_URL}/${path}`;
  const request = fetch(API_REQ_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${token}`
    },
    body: JSON.stringify(obj)
  });
  return processRequest(request);
}

export function put(path, obj) {
  const API_REQ_URL = `${API_BASE_URL}/${path}/`;
  const request = fetch(API_REQ_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${token}`
    },
    body: JSON.stringify(obj)
  });
  return processRequest(request);
}

export function login(path, obj) {
  const API_REQ_URL = `http://prism.ccoherence.com/${path}`;
  const request = fetch(API_REQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // 'Authorization': `Token ${token}`
    },
    body: JSON.stringify(obj)
  });
  return processRequest(request);
}
