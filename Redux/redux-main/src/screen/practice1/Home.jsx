// style
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Store/Card";
import { fetchProduct, STATUSES } from "../../Store/ProductSlice";
import "../../style/home.css";

export default function Home() {
  let dispatch = useDispatch();
  let { data, status } = useSelector((a) => a.product);
  let userName = useSelector((a) => a.login.name);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const itemAddIntoCard = (e) => {
    dispatch(addItem(e));
  };

  if (status === STATUSES.LOADING) {
    return <h4>Loading...</h4>;
  }

  if (status === STATUSES.ERROR) {
    return <h4>Something is wrong.</h4>;
  }

  return (
    <section className="Home">
      <div className="heading">
        <h1>Welcome to {userName ? userName : "ECommerce Store"}</h1>
      </div>
      <div className="products">
        <div className="productHeading">
          <h1>All Products</h1>
        </div>

        <div className="allProduct">
          {data.map((value, index) => {
            return (
              <div className="product1" key={index}>
                <img src={value.image} alt={value.title} />
                <h2>{value.title}</h2>
                <h4>{value.price}</h4>
                <button onClick={() => itemAddIntoCard(value)}>
                  Add to Card
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
