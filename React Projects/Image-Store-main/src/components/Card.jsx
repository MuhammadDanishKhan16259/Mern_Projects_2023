import React from "react";
import "../style/card.css";

const Card = () => {
  return (
    <React.StrictMode>
      <section className="Cards">
        <h1>Popular Images</h1>
      </section>
      <section className="allCard">
        <div className="card1">
          <a
            href="https://source.unsplash.com/1600x900/?nature,water"
            download
            target="_blank"
          >
            Download
          </a>
        </div>
        <div className="card2">
          <a
            href="https://source.unsplash.com/1600x900/?mango"
            download
            target="_blank"
          >
            Download
          </a>
        </div>
        <div className="card3">
          <a
            href="https://source.unsplash.com/1600x900/?man,face"
            download
            target="_blank"
          >
            Download
          </a>
        </div>
        <div className="card4">
          <a
            href="https://source.unsplash.com/1600x900/?clock"
            download
            target="_blank"
          >
            Download
          </a>
        </div>
        <div className="card5">
          <a
            href="https://source.unsplash.com/1600x900/?camera"
            download
            target="_blank"
          >
            Download
          </a>
        </div>
        <div className="card6">
          <a
            href="https://source.unsplash.com/1600x900/?computer"
            download
            target="_blank"
          >
            Download
          </a>
        </div>
        <div className="card7">
          <a
            href="https://source.unsplash.com/1600x900/?gaming"
            download
            target="_blank"
          >
            Download
          </a>
        </div>
        <div className="card8">
          <a
            href="https://source.unsplash.com/1600x900/?train"
            download
            target="_blank"
          >
            Download
          </a>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Card;
