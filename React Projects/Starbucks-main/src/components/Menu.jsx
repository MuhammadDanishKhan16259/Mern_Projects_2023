import { Link, useNavigate } from "react-router-dom";

// scss
import "../style/menu.scss";

// data
import sourceData from "../json/Products.json";

export default function Menu() {
  let navigate = useNavigate();
  let allItem = [];

  for (let i in sourceData.Products) {
    let a = sourceData.Products[i].map((value) => {
      return value.product;
    });
    allItem.push(a);
  }

  let name = [];
  for (let i in sourceData.Products) {
    for (let b in sourceData.Products[i]) {
      name.push(sourceData.Products[i][b]);
    }
  }

  return (
    <section className="menu">
      <div className="subnav">
        <nav>
          <ul>
            <li>
              <Link to="products">All products</Link>
            </li>
            <li>
              <Link to="featured">Featured</Link>
            </li>
            <li>
              <Link to="previous-order">Previous Orders</Link>
            </li>
            <li>
              <Link to="favorite-products">Favorite Products</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="all__menu">
        <div className="left__side">
          {name.map((value, index) => {
            return (
              <div key={index}>
                <h3>{value.name}</h3>
                <p
                  onClick={() => navigate("detail")}
                  style={{ cursor: "pointer" }}
                >
                  {value.category}
                </p>
              </div>
            );
          })}
        </div>
        <div className="right__side">
          <div className="box1">
            <div className="heading">
              <h1>All Items</h1>
              <p>
                All category item is here it's main branch where all types of
                items is precentage.
              </p>
            </div>
            <div className="boxes">
              {allItem.map((value) => {
                return value.map((val) => {
                  return val.map((value, index) => {
                    return (
                      <div className="sub__box1" key={index}>
                        <img src={value.image} alt={value.name} />
                        <p>{value.name}</p>
                      </div>
                    );
                  });
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
