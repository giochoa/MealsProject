import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51N7TwaCTZNhGRa0xAw4bxd2aUVdlaDTFBnSMWzKkSSxsJkb4RCvDyyXpX70E2NHv42OoDGvsyLiIQBCRWlTEiiIq00c2nf9uY6"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong processing your payment");
    }
    return res.json();
  });
};
