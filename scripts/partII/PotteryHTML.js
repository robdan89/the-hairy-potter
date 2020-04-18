export const PieceOfPottery = (potteryObj) => {
  return `
    <section id="piece">
        <h4>${potteryObj.shape}</h4>
        <ul>
            <li>Height: ${potteryObj.height}</li>
            <li>Weight: ${potteryObj.weight}</li>
            <li>Price: $${potteryObj.price}</li>

        </ul>
        <button id="sellPottery--${potteryObj.id}">Sell</button>
    </section>
    `;
};
