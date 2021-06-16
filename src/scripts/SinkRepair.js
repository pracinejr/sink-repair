import { Requests } from "./Requests.js";
import { ServiceForm } from "./ServiceForm.js";

document.addEventListener("click", (event) => {
  const clickedItem = event.target;
  if (clickedItem.id === "requestServiceButton") {
    addRequestService();
  }
});

export const SinkRepair = () => {
  return `
    <h1>Maude and Merle's Sink Repair</h1>
    
    <article class="
    <section class="serviceForm">
        <h2>Service Form</h2>
        ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `;
};
