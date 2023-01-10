import { createStore, applyMiddleware, combineReducers } from "redux";
// import { logger } from "redux-logger";
import carReducer from "./car/carReducer";
import { bikeReducer } from "./bike/bikeReducer";

const rootReducer = combineReducers({
  car: carReducer,
  bike: bikeReducer,
});

const store = createStore(rootReducer);

export default store;
