import React from "react";
import "../style/SearchResult.css";

const SearchResult = (props) => {
  let image =
    props.userItem === undefined
      ? null
      : `https://source.unsplash.com/400x400/?${props.userItem}`;
  return (
    <React.StrictMode>
      <section className="heading">
        <h1>Search Result</h1>
      </section>
      <section className="result">
        <div className="images">
          <img src={image} alt="" />
          {image === null ? null : (
            <a href={image} download target="_blank">
              Download
            </a>
          )}
        </div>
      </section>
    </React.StrictMode>
  );
};

export default SearchResult;
