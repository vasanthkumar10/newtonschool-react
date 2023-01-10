import { BUY_BIKE } from "./bikeTypes";

export function buyBike(num = 1) {
  return {
    type: BUY_BIKE,
    payload: num,
  };
}
