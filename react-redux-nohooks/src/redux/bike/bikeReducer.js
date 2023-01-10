import { BUY_BIKE } from "./bikeTypes";

const initialState = {
  numOfBikes: 20,
};

export const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return { ...state, numOfBikes: state.numOfBikes - action.payload };

    default:
      return state;
  }
};
