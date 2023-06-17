import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer";
import { CartContainer, CartIcon } from "../components/checkout.styles";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { CartContext } from "../../../services/cart/cart.context";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
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
      <Text>{JSON.stringify(cart)}</Text>
      <Text>restaurant: {JSON.stringify(restaurant)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
