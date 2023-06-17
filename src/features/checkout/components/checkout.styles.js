import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { Icon } from "../../restaurants/components/restaurant-info-card.styles";

export const CartContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;
