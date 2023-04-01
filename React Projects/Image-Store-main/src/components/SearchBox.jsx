import React, { useEffect, useState } from "react";
import "../style/search.css";

const SearchBox = (props) => {
  let [item, updateItem] = useState();

  const search = (val) => {
    let { value } = val.target;
    updateItem(value);
  };

  useEffect(() => {
    props.result(item);
  });

  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search free high resulation photo"
        onChange={search}
      />
    </section>
  );
};

export default SearchBox;
