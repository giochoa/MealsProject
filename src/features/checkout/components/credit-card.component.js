import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.services";

export const CreditCardInput = ({ name = "jack" }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isInComplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");
    console.log(isInComplete);
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    const info = await cardTokenRequest(card);
    console.log(info);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
