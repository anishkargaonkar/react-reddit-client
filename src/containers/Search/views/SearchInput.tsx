import React, { FC, useEffect, useState } from "react";
import { Avatar, Input } from "antd";
import logo from "../../../assets/logo.svg";
import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../store";
import { getResultsRequest } from "../action";

type Props = {};

const { Search } = Input;
const SearchInput: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryLimit, setSearchQueryLimit] = useState(0);

  const isLoading = useSelector<ApplicationState, boolean>(
    (s) => s.search.isLoading
  );

  const onSearchQueryChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;
    setSearchQuery(val);
  };

  const onSearchHandler = () => {
    dispatch(getResultsRequest({
      query: searchQuery,
      limit: searchQueryLimit
    }))
  }

  useEffect(() => {
    setSearchQueryLimit(25);
  }, [])

  return (
    <div className="search-input-container">
      <Avatar src={logo} shape="circle" size={150} />
      <Search
        className="search-input"
        placeholder="Search for a topic"
        loading={isLoading}
        value={searchQuery}
        onChange={onSearchQueryChangeHandler}
        onSearch={onSearchHandler}
      />
    </div>
  );
};

export { SearchInput };
