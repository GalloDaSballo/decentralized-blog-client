import { BigNumber, utils } from "ethers";

export const formatEther = (number: BigNumber) => utils.formatEther(number);
