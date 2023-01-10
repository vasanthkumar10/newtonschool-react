import { BUY_CAR } from "./carTypes";

export function buyCar(num = 1) {
  return {
    type: BUY_CAR,
    payload: num,
  };
}
