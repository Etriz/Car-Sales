import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/actions";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          // console.log("payload", props.feature);
          props.addFeature(props.feature);
        }}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const stateToProps = (state) => {
  return {
    // addFeature: state.addFeature,
  };
};
export default connect(stateToProps, { addFeature })(AdditionalFeature);
