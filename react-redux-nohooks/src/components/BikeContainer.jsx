import React from "react";
import { buyBike } from "../redux/bike/bikeAction";
import { connect } from "react-redux";

function BikeContainer(props) {
  console.log("bike props", props);
  return (
    <div>
      <h2>Bike count - {props.numOfBikes}</h2>
      <button onClick={props.buyBike}>buy Bike</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfBikes: state.bike.numOfBikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBike: () => dispatch(buyBike()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BikeContainer);
