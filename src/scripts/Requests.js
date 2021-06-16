import { getRequests } from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests(); // grab the local state of the requests data

  let html = `
        <ul>
            ${requests
              .map((requestToList) => {
                return requestToList.description;
              })
              .join("")}
        </ul>
    `;

  return html;
};
