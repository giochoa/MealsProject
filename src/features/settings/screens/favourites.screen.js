import React, { useContext } from "react";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { Spacer } from "../../../components/spacer/spacer";
import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card.components";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-styles.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FadeInView } from "../../../components/animations/fade.animation";
import styled from "styled-components/native";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <Spacer position={"bottom"} size={"large"}>
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
