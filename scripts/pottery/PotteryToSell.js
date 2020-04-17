const potteryToSell = [];

const PotteryToSell = (potteryObj) => {
  if (potteryObj.cracked === false) {
    if (potteryObj.weight > 3) {
      potteryObj.price = 40;
    } else if (propertyObj.weight < 3) {
      potteryObj.price = 20;
    }
    potteryToSell.push(potteryObj);
  } else {
    return false;
  }
};
