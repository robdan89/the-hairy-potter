import { PieceOfPottery } from "./PotteryHTML.js";
import { usePottery } from "../partIII/PotteryDataProvider.js";

const contentTarget = document.querySelector("#inventory");

export const PotteryInventory = () => {
  const pottery = usePottery();
  const potteryToSell = pottery.filter((piece) => piece.cracked === false);
  contentTarget.innerHTML = potteryToSell
    .map((pot) => PieceOfPottery(pot))
    .join("");
};

contentTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("sellPottery--")) {
    const pottery = usePottery();
    const [prefix, pieceId] = clickEvent.target.id.split("--");
    const soldPiece = pottery.find((pot) => pot.id === parseInt(pieceId));
    window.alert(`You sold a ${soldPiece.shape} for $${soldPiece.price}`);
  }
});
