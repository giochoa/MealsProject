// Note that this switching of host works only for IOS, For Android we just need to hook it up
//to the live server on the cloud. The reason is locally we are not running on https and Android
//Needs https to connect and retrieve the data.
import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-fb4e7.cloudfunctions.net/";
const localHost = "http://127.0.0.1:5001/mealstogo-fb4e7/us-central1/";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
