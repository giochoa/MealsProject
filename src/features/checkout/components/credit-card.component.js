import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

export const CreditCardInput = () => {
  const onChange = (formData) => {
    const { values, status } = formData;
    const isInComplete = Object.values(status).includes("incomplete");
    console.log(isInComplete);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
