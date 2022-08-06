import React from "react";
// import { RestaurantCard } from "../../restaurants/components/restaurant-info-card.styles";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
