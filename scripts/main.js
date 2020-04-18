import { getPottery } from "./partIII/PotteryDataProvider.js";
import { PotteryInventory } from "./partII/PotteryInventory.js";

getPottery().then(PotteryInventory);
