import React, { FC } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";

type Props = {
  title: string;
  imageURL: string;
  sourceURL: string;
};

const ResultListItem: FC<Props> = (props: Props) => {
  const { title, imageURL, sourceURL } = props;

  const onClickHandler = (url: string) => {
    window.open(`https://reddit.com/${url}`);
  };

  return (
      <div className="item-container" onClick={() => onClickHandler(sourceURL)}>
          <img className="thumbnail" alt="" src={imageURL} onError={() => logo} />
          <div>
              <div className="title">{title}</div>
          </div>
    </div>
  );
};

export { ResultListItem };
