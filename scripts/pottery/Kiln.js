const Kiln = (potteryObj, temp) => {
  potteryObj.fired = true;

  if (temp > 2200) {
    potteryObj.cracked = true;
  } else {
    potteryObj.cracked = false;
  }
};
