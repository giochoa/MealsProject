import styled from "styled-components";
// import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { TextInput } from "react-native-paper";
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/ramen_pic.jpeg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;
export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
