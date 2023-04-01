const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { Client } = require("@googlemaps/google-maps-services-js");
//I think we are initiating this with an empty object since we are gonna be passing it with objects??
const client = new Client({});

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//Note: We did not let the firebase install the dependencies but we manually
//did by cd function folder and using the yarn command.
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase via Jack!");
// });
exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});
exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});
