export const initialState = {
  mustang: {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: [],
    },
    additionalFeatures: [
      { id: 1, name: "V-8 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 },
    ],
  },
  camaro: {
    additionalPrice: 0,
    car: {
      price: 25995,
      name: "2019 Chevy Camaro",
      image: "https://cdn.motor1.com/images/mgl/KAojA/s1/2015-569206-2016-chevrolet-camaro1.jpg",
      features: [],
    },
    additionalFeatures: [
      { id: 1, name: "V-8 engine", price: 1700 },
      { id: 2, name: "Bumblebee package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 600 },
      { id: 4, name: "Rear spoiler", price: 200 },
    ],
  },
};
export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        [action.payload.carName]: {
          additionalPrice: state[action.payload.carName].additionalPrice + action.payload.price,
          car: {
            ...state[action.payload.carName].car,
            features: [...state[action.payload.carName].car.features, action.payload],
          },
          additionalFeatures: [
            ...state[action.payload.carName].additionalFeatures.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
        },
      };
    case "REMOVE":
      return {
        ...state,
        [action.payload.carName]: {
          additionalPrice: state[action.payload.carName].additionalPrice - action.payload.price,
          car: {
            ...state[action.payload.carName].car,
            features: [
              ...state[action.payload.carName].car.features.filter(
                (item) => item.id !== action.payload.id
              ),
            ],
          },
          additionalFeatures: [
            ...state[action.payload.carName].additionalFeatures,
            action.payload,
          ].sort((a, b) => {
            const itemA = a.id;
            const itemB = b.id;
            return itemA - itemB;
          }),
        },
      };

    default:
      return state;
  }
};
