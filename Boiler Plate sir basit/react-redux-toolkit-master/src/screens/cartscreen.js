import { useSelector, useDispatch } from "react-redux";
import { remove } from "../config/redux/reducer/cartSlice";
export default function CartScreen() {
  const cartData = useSelector((a) => a.Cart);
  const dispatch = useDispatch();

  let removeProduct = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <h1>Cart Screen</h1>
      {cartData.map((x, i) => (
        <div key={i}>
          <img src={x.image} width="100px" />
          <h2>{x.title}</h2>
          <button onClick={() => removeProduct(x.id)}>Remove From Cart</button>
        </div>
      ))}
    </>
  );
}
