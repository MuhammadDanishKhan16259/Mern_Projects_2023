import React from "react";

// data
import CustomerReviewData from "./data/customer.json";
// style
import "../style/CustomerReview.css";

const CustomerReview = () => {
  let data = CustomerReviewData.customer;
  return (
    <React.StrictMode>
      <section className="review">
        <div className="heading">
          <h1>customer reviews</h1>
        </div>
        <div className="customer">
          {data.map((val) => {
            return (
              <div className="customer1" key={val.id}>
                <div className="images">
                  <img
                    src={`./images/${val.image}.jpg`}
                    alt={val.name}
                  />
                </div>
                <div className="description">
                  <h1>{val.name}</h1>
                  <h4>{val.job}</h4>
                  <p>{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </React.StrictMode>
  );
};

export default CustomerReview;
