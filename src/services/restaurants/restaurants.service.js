// import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location) => {
  return fetch(
    `http://127.0.0.1:5001/mealstogo-fb4e7/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
  // return new Promise((resolve, reject) => {
  //   const mock = mocks[location];
  //   if (!mock) {
  //     reject("not found");
  //   }
  //   resolve(mock);
  // });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
