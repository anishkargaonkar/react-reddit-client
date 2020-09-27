import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../store";
import { Search } from "../types";
import { ResultListItem } from "../../../components/ResultListItem/ResultListItem";
import logo from "../../../assets/logo.svg";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { resetResults } from "../action";
import "../styles.css";

type Props = {};

const Results: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const results = useSelector<ApplicationState, Search | null>(
    (s) => s.search.results
  );

  const onResetResultsHandler = () => {
    dispatch(resetResults());
  };

  return (
    <div>
      <div className="result-header">
        <Button
          icon={<ArrowLeftOutlined />}
          shape="circle-outline"
          onClick={() => onResetResultsHandler()}
        />
        <div>Search Results</div>
        <div />
      </div>
      {!results || results.data.children.length === 0 ? (
        <div className="no-results-container">No results found</div>
      ) : (
        <div className="results-container">
          {results.data.children.map((result, index) => (
            <ResultListItem
              key={index}
              title={result.data.title}
              imageURL={result.data.thumbnail === "self" ? logo : result.data.thumbnail}
              sourceURL={result.data.permalink}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Results };
