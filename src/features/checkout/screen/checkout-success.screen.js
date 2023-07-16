import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { CartContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartContainer>
        <CartIcon icon="check-bold" />
        <Text variant="label">Success!</Text>
      </CartContainer>
    </SafeArea>
  );
};
