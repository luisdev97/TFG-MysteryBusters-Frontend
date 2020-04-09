import React from "react";
import "./NewsHeader.css";

function NewsHeader(props: NewsHeaderProps) {
  return (
    <div className="mx-auto">
      <header className="PaperHead">Mystery Busters</header>
      <div className="PaperSubHead">Iowa, USA - Domingo Abril 05, 2020</div>
    </div>
  );
}

type NewsHeaderProps = {
  className?: string;
};

export default NewsHeader;
