import React, {useState} from "react";

// Components
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Card from "./Card";

const Home = () => {
  let [item, updateItem] = useState();

  return (
    <React.StrictMode>
      <SearchBox result={updateItem} />
      <SearchResult userItem={item} />
      <Card />
    </React.StrictMode>
  );
};

export default Home;
