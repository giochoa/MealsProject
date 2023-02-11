const { locations: locationsMock } = require("./geocode.mock");
// const url = require("url");

module.exports.geocodeRequest = (request, respose) => {
  const { city } = request.query;
  const locationMock = locationsMock[city.toLowerCase()];
  respose.json(locationMock);
};
