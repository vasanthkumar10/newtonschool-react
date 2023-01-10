import React from "react";
import { buyCar } from "../redux/car/carAction";
import { connect } from "react-redux";

function CarContainer(props) {
  console.log("props", props);
  return (
    <div>
      <h2>No of cars - {props.numOfCars}</h2>
      <button onClick={props.buyCar}>buy car</button>
    </div>
  );
}

// useSelector -> mapStateToProps
// useDispacth -> mapDispatchToProps
// const mapStateToProps = (state) => {
//   return {
//     numOfCars: state.numOfCars,
//   };
// };

function mapStateToProps(state) {
  console.log("state", state);
  return {
    numOfCars: state.car.numOfCars,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyCar: () => dispatch(buyCar(1)),
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCar: () => dispatch(buyCar(1)),
//   };
// };

// export default CarContainer;

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
