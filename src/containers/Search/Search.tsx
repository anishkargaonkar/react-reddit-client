import React, { FC } from "react";
import "./styles.css";
import { SearchInput } from "./views/SearchInput";

type Props = {};

const Search: FC<Props> = (props: Props) => {
  return (
    <div className="container">
      <SearchInput />
    </div>
  );
};

export { Search };