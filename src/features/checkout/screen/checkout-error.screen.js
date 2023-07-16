import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { CartContainer, CartIcon } from "../components/checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartContainer>
    </SafeArea>
  );
};
