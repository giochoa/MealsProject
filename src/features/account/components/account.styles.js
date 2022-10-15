import styled from "styled-components";
// import { ImageBackground } from "react-native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/ramen_pic.jpeg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;
