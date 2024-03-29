import camelize from "camelize";
import { host, isMock } from "../../utils/env";
// import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return fetch(
    // `http://127.0.0.1:5001/mealstogo-fb4e7/us-central1/geocode?city=${searchTerm}`
    //We could switch to mock data here by adding mock=true=>`${host}geocode?city=${searchTerm}&mock=true`
    `${host}geocode?city=${searchTerm}&mock=${isMock}`
  ).then((res) => {
    return res.json();
  });
  // return new Promise((resolve, reject) => {
  //   const locationMock = locations[searchTerm];
  //   if (!locationMock) {
  //     reject("location not found");
  //   }
  //   resolve(locationMock);
  // });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  // console.log(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
