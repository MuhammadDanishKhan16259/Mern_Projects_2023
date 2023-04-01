// scss
import "../../style/information.scss";

// data
import sourceData from "../../json/Products.json";

export default function Information() {
  let product = sourceData.Products;
  let arr = [];
  for (let i in product) {
    let a = product[i].map((value) => {
      return value.product;
    });
    arr.push(...a);
  }

  const msg = () => {
    alert("Not working");
  }

  return (
    <section className="information">
      <div className="box">
        <div className="invest">
          <h1>400$</h1>
          <p>Invest this Month</p>
        </div>
        <div className="profit">
          <h1>30%</h1>
          <p>We have profit</p>
        </div>
        <div className="lost">
          <h1>20%</h1>
          <p>Last month we had a loss</p>
        </div>
        <div className="achieve__goal">
          <h1>88%</h1>
          <p>Achieve goal</p>
        </div>
        <div className="cutomer__rating">
          <h1>
            4.5{" "}
            <span>
              <i class="fa-solid fa-star-half-stroke"></i>
            </span>
          </h1>
          <p>Customer rating</p>
        </div>
      </div>

      <div className="table">
        <table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((val) => {
              return val.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td><img src={`../${value.image}`} alt={value.name} /></td>
                    <td>
                      <button className="dark" onClick={msg}>Update</button>
                    </td>
                    <td>
                      <button className="light" onClick={msg}>Delete</button>
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
