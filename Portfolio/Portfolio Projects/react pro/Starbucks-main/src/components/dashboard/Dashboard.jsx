// scss
import "../../style/dashboard.scss";

export default function Dashboard() {
  let userName = localStorage.getItem("name");
  let condition = userName.toLowerCase() === "admin";
  return (
    <section className="dashboard">
      <div className="heading">
        <h1>
          <span>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>{" "}
          {condition ? "Admin Dashboard" : "Dashboard"}
        </h1>
      </div>
      <div className="purchased">
        <div className="heading">
          <h1>{condition ? "Total Item We Have" : "Total Purchased Item"}</h1>
        </div>
        <div className="box1">
          <h1>{condition ? 24 : 15}</h1>
        </div>
      </div>
      <div className="price">
        <div className="heading">
          <h1>{condition ? "sold out" : "Total Purchased Item Price"}</h1>
        </div>
        <div className="box1">
          <h1>{condition ? 13 : "65$"}</h1>
        </div>
      </div>
      <div className="most">
        <div className="heading">
          <h1>
            {condition ? "Most Customers Demand Items" : "Most Purchased Items"}
          </h1>
        </div>
        <div className="box">
          <div className="box1">
            {condition ? null : (
              <div className="quantity">
                <h1>6</h1>
              </div>
            )}
          </div>
          <div className="box2">
            {condition ? null : (
              <div className="quantity">
                <h1>4</h1>
              </div>
            )}
          </div>
          <div className="box3">
            {condition ? null : (
              <div className="quantity">
                <h1>3</h1>
              </div>
            )}
          </div>
          <div className="box4">
            {condition ? null : (
              <div className="quantity">
                <h1>2</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
