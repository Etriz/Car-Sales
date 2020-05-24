export const addFeature = (feature, carName) => {
  return { type: "ADD", payload: { ...feature, carName: carName } };
};
export const removeFeature = (feature, carName) => {
  return { type: "REMOVE", payload: { ...feature, carName: carName } };
};
