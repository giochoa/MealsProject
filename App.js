/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
// import { Text } from "react-native";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation/index";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
const firebaseConfig = {
  apiKey: "AIzaSyA3JS4nR-dsH6iZTYGx-HO8I25AknUPhLA",
  authDomain: "mealstogo-fb4e7.firebaseapp.com",
  projectId: "mealstogo-fb4e7",
  storageBucket: "mealstogo-fb4e7.appspot.com",
  messagingSenderId: "39538723071",
  appId: "1:39538723071:web:9c582b0103edaeaf51a4ca",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("@gmail.com", "")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
