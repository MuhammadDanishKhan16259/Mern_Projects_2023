import React, { useState } from "react";
import sorceData from "../data/question.json";
import "../style/QCards.css";

const QuestionCards = () => {
  let [flag, updateFlag] = useState(null);
  // data
  let data = sorceData.ReactQuestion;

  const show = (index) => {
    updateFlag(index);
  };

  const hide = () => {
    updateFlag(null);
  };

  return (
    <React.StrictMode>
      <section className="Cards">
        <h1>React Interview Question</h1>
        {data.map((val, index) => {
          return (
            <div className="subCard" key={index}>
              <div className="question">
                <p
                  onClick={() => {
                    show(index);
                  }}
                  onDoubleClick={hide}
                >
                  <i
                    className={
                      flag === index ? "fa-solid fa-minus" : "fa-solid fa-plus"
                    }
                  ></i>
                </p>
                <h5>{val.question}</h5>
              </div>
              <div
                className="Answer"
                style={{ display: flag === index ? "block" : "none" }}
              >
                <p>{val.answer}</p>
              </div>
            </div>
          );
        })}
      </section>
    </React.StrictMode>
  );
};

export default QuestionCards;
