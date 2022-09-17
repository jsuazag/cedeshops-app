import { useState } from "react";
import { SearchWrapper, SearchInput, SearchClearWrapper } from "./styles";
import { IoClose } from "react-icons/io5";

export const Search = ({ searchTerm = "" }) => {
  const [searchText, setSearchText] = useState(searchTerm);

  const handlerChangeText = (event) => {
    setSearchText(event.target.value);
  };

  const clearSearchHandler = () => {
    setSearchText("");
  };

  return (
    <SearchWrapper>
      <SearchInput
        value={searchText}
        onChange={handlerChangeText}
        type="text"
      />
      <SearchClearWrapper
        onClick={clearSearchHandler}
        hasText={searchText !== ""}
      >
        <IoClose />
      </SearchClearWrapper>
    </SearchWrapper>
  );
};
