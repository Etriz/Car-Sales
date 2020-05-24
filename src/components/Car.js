import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import AddedFeatures from "./AddedFeatures";
import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";

const Car = (props) => {
  const { carName } = useParams();
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props[carName].car} />
        <AddedFeatures car={props[carName].car} carName={carName} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props[carName].additionalFeatures}
          carName={carName}
        />
        <Total car={props[carName].car} additionalPrice={props[carName].additionalPrice} />
      </div>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    mustang: state.mustang,
    camaro: state.camaro,
  };
};
export default connect(stateToProps, {})(Car);
