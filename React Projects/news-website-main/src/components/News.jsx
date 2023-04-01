import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style/news.css";

export default function News() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-10-18&sortBy=popularity&apiKey=d4aab40b76a14ea18aace8d635b15edd"
      )
      .then((res) => setData(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <section className="newsSection">
      <h1>Latest News</h1>
      <section className="cards">
        {data.map((value, index) => {
          return (
            <div
              className="card"
              key={index}
              title="read more"
              onClick={() => navigate("detail", { state: value })}
            >
              <img src={value.urlToImage} alt="" />
              <h4>{value.title}</h4>
            </div>
          );
        })}
      </section>
      <div className="footer">
        <h4>© 2022 Shaykh Mirzaban All Rights Reserved.</h4>
      </div>
    </section>
  );
}
