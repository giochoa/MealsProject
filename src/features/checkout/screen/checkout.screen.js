import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer";
import { CartContainer, CartIcon } from "../components/checkout.styles";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { CartContext } from "../../../services/cart/cart.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card.components";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);
  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty</Text>
        </CartContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum}</Text>
        </Spacer>
        <CreditCardInput />
      </ScrollView>
    </SafeArea>
  );
};
