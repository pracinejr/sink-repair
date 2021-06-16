const applicationState = {
  requests: [],
  requestService: [],
};

const API = "http://localhost:8088";

export const fetchRequests = () => {
  return fetch(`${API}/requests`)
    .then((response) => response.json())
    .then((serviceRequests) => {
      // Store the external state in application state
      applicationState.requests = serviceRequests;
    });
};

export const getRequests = () => {
  return dataAccess.requests.map((request) => ({ ...request }));
};
