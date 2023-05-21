import React from "react";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.components";

export const CheckoutScreen = () => (
  <SafeArea>
    <CreditCardInput />
  </SafeArea>
);
