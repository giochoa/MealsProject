import React from "react";
// import { Image } from "react-native";
// import { Card } from "react-native-paper";
// import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Jacks ramen",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.gransta.jp/gr_cswp/wp-content/uploads/2022/01/noodle_main.jpg",
    ],
    address = "sumida ku kamezawa",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
// const style = StyleSheet.create({
//   card: { backgroundColor: "beige" },
//   cover: { padding: 20, backgroundColor: "beige" },
//   title: { padding: 16 },
// });
