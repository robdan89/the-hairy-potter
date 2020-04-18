export const PieceOfPottery = (potteryObj) => {
  return `
    <section id="piece">
        <h4>${potteryObj.shape}</h4>
        <ul>
            <li>${potteryObj.height}</li>
            <li>${potteryObj.weight}</li>
            <li>$${potteryObj.price}</li>

        </ul>
        <button id="sellPottery--${potteryObj.id}">Sell</button>
    </section>
    `;
};
