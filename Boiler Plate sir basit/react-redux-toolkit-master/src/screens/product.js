import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../config/redux/reducer/cartSlice";
import { Link } from "react-router-dom";

export default function Products() {
  const [listData, setListData] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  let getData = () => {
    setLoader(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setLoader(false);
        setListData([...json]);
      })
      .catch((er) => {
        setLoader(false);
        console.log(er);
      });
  };
  let addToCart = (e) => {
    dispatch(add(e));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Products</h1>
      <Link to="/cart">Cart Screen</Link>
      {loader ? (
        <h2>Loading</h2>
      ) : listData && listData.length > 0 ? (
        listData.map((x, i) => (
          <div key={i}>
            <img src={x.image} width="300px" />
            <div>
              <h3>{x.title}</h3>
              <button onClick={() => addToCart(x)}>Add To Cart</button>
            </div>
          </div>
        ))
      ) : (
        <h2>No Data Found</h2>
      )}
    </>
  );
}
