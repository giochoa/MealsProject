module.exports.payRequest = (request, response, stripe) => {
  response.send("This is my payment gateway");
};
//Note: We still have to set the secret key for stripe and set the config file to our local functions
// We will run this command on the terminal after setting the key on firebase to bring them locally since we are
// running on developer mode. firebase functions:config:get > .runtimeconfig.json
