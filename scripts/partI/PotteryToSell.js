import { usePottery } from "../partIII/PotteryDataProvider.js";

const potteryToSell = [];

const PotteryToSell = () => {
  const pottery = usePottery();
  pottery.map((potteryObj) => {
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
  });
};
