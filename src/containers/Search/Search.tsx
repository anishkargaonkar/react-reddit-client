import { message } from "antd";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { CustomError } from "../../utils/api-helper";
import "./styles.css";
import { Search as SearchModel } from "./types";
import { Results } from "./views/Results";
import { SearchInput } from "./views/SearchInput";

type Props = {};

const Search: FC<Props> = (props: Props) => {
  const results = useSelector<ApplicationState, SearchModel | null>(
    (s) => s.search.results
  );
  const searchError = useSelector<ApplicationState, CustomError | null>(
    (s) => s.search.errors.results
  );

  useEffect(() => {
    if (searchError) {
      message.error(searchError.message);
    }
  }, [searchError]);

  return (
    <div className="container">{!results ? <SearchInput /> : <Results />}</div>
  );
};

export { Search };
