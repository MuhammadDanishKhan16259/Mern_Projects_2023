// style
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Store/Card";
import "../../style/card.css";

export default function Card() {
  let data = useSelector(a => a.card);
  let dispatch = useDispatch();

  const removeProduct = (e) => {
    dispatch(removeItem(e));
  }

  return (
    <section className="card">
      <div className="heading">
        <h1>Selected Card</h1>
      </div>

      <div className="cardColumn">
        {data && data.length > 0 ? data.map((value, index) => {
          return (
            <div className="card1" key={index}>
              <img src={value.image} alt={value.title} width="80px" />
              <h4>{value.title}</h4>
              <button onClick={() => removeProduct(value.id)}>remove</button>
            </div>
          );
        }) : <h5>Card Empty</h5>}
      </div>
    </section>
  );
}
