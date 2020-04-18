import { PieceOfPottery } from "./PotteryHTML.js";

const contentTarget = document.querySelector(".inventory");

const PotteryInventory = () => {
  contentTarget.innerHTML = `
    ${potteryToSell.map((piece) => {
      const html = PieceOfPottery(piece);
      return html;
    })}
    `;
};

contentTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("sellPottery--")) {
    const [prefix, pieceId] = clickEvent.target.id.split("--");
    const soldPiece = potteryToSell.find((pot) => pot.id === pieceId);
    window.alert(`You sold a ${soldPiece.shape} for $${soldPiece.price}`);
  }
});
