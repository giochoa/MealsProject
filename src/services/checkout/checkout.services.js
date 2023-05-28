import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51N7TwaCTZNhGRa0xAw4bxd2aUVdlaDTFBnSMWzKkSSxsJkb4RCvDyyXpX70E2NHv42OoDGvsyLiIQBCRWlTEiiIq00c2nf9uY6"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
