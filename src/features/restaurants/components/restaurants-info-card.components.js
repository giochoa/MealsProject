import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: beige;
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: beige;
  padding: 20px;
`;
const Title = styled(Text)`
  padding: 16px;
  color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Jacks ramen",
    icon,
    photos = [
      "https://www.gransta.jp/gr_cswp/wp-content/uploads/2022/01/noodle_main.jpg",
    ],
    address = "sumida ku kamezawa",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
// const style = StyleSheet.create({
//   card: { backgroundColor: "beige" },
//   cover: { padding: 20, backgroundColor: "beige" },
//   title: { padding: 16 },
// });
