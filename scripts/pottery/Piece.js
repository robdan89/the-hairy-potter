export const Piece = (potteryObj) => {
  return `
        <section id="piece">
        <h3>Piece #${potteryObj.id}</h3>
            <ul>
                <li>${potteryObj.shape}</li>
                <li>${potteryObj.height}</li>
                <li>${potteryObj.weight}</li>
            </ul>        
        </section>    
    `;
};
