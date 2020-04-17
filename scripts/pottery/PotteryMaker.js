import { usePottery, savePottery } from "./PotteryDataProvider.js";

const eventHub = document.querySelector(".container");

export const PotteryMaker = () => {
  const pottery = usePottery;

  eventHub.innerHTML = `
    <article id="potteryMaker">
        <fieldset>
        <select id="shape">
            <option value="0">Choose a shape...</option>
                ${pottery.map((piece) => {
                  return `<option value="${piece.id}">${piece.shape}</option>`;
                })}
        </select>
        <select id="height">
            <option value="0">Choose a height...</option>
                ${pottery.map((piece) => {
                  return `<option value="${piece.id}">${piece.height}</option>`;
                })}
        </select>
        <select id="weight">
            <option value="0">Choose a weight...</option>
             ${pottery.map((piece) => {
               return `<option value="${piece.id}">${piece.weight}</option>`;
             })}
        </select>
        </fieldset>


        
            <button id="readyForKiln">Ready To Cook</button>
            </article>
    `;
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "readyForKiln") {
    const shape = document.querySelector("#shape").value;
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    if (shape !== 0 && height !== 0 && weight !== 0)
      const newPotteryObject = {
        shape: shape,
        height: height,
        weight: parseInt(weight),
      };
    savePottery(newPotteryObject);
  }
});
