let pottery = [];

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
  const potteryStateChangedEvent = new CustomEvent("potteryStateChanged");

  eventHub.dispatchEvent(potteryStateChangedEvent);
};

/*
    Allow other modules to get a copy of the application state
*/
export const usePottery = () => pottery.slice();

/*
    Get the state of the friends from the API into the application
*/
export const getPottery = () => {
  return fetch("http://localhost:3000/pottery")
    .then((response) => response.json())
    .then((parsedPottery) => {
      pottery = parsedPottery;
    });
};

export const deletePottery = (potteryId) => {
  return fetch(`http://localhost:3000/pottery/${potteryId}`, {
    method: "DELETE",
  })
    .then(getPottery)
    .then(dispatchStateChangeEvent);
};

export const savePottery = (piece) => {
  return fetch("http://localhost:3000/pottery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(piece),
  })
    .then(getPottery)
    .then(dispatchStateChangeEvent);
};
