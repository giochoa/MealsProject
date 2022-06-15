import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangetext={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
