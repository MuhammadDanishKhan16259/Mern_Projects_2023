import { useState } from "react";
import { Link } from "react-router-dom";
// scss
import "../style/rewards.scss";

export default function Rewards() {
  let [item, setItem] = useState([
    {
      image: "./images/rewards/1.png",
      heading: "Customize your drink",
      peragraph:
        "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
    },
    {
      image: "./images/rewards/2.png",
      heading: "Brewed hot coffee, bakery item or hot tea",
      peragraph:
        "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
    },
    {
      image: "./images/rewards/3.png",
      heading: "Handcrafted drink, hot breakfast or parfait",
      peragraph:
        "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
    },
    {
      image: "./images/rewards/4.png",
      heading: "Salad, sandwich or protein box",
      peragraph:
        "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
    },
    {
      image: "./images/rewards/5.png",
      heading: "Select merchandise or at-home coffee",
      peragraph:
        "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
    },
  ]);
  let [count, setCount] = useState(0);

  return (
    <section className="rewards">
      <div className="label1">
        <h1>STARBUCKS® REWARDS</h1>
      </div>
      <div className="heroSection">
        <div className="content">
          <div className="top">
            <h1>FREE COFFEE IS A TAP AWAY</h1>
            <p>Join now to start earning Rewards.</p>
          </div>
          <div className="bottom">
            <Link to="/create">
              <button>Join now</button>
            </Link>
            <p>
              Or{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                join in the app{" "}
              </span>
              for the best experience
            </p>
          </div>
        </div>
      </div>
      <div className="earn__star">
        <div className="heading">
          <h1>Getting started is easy</h1>
          <p>Earn Stars and get rewarded in a few easy steps.</p>
        </div>
        <div className="box">
          <div className="box1">
            <img src="./images/rewards/no1.jpg" alt="image not found" />
            <h2>Create an account</h2>
            <p>
              To get started, <span style={{ color: "#42a862" }}>join now</span>
              . You can also
              <span style={{ color: "#42a862" }}>join in the app</span> to get
              access to the full range of Starbucks® Rewards benefits.
            </p>
          </div>
          <div className="box1">
            <img src="./images/rewards/no2.jpg" alt="image not found" />
            <h2>Order and pay how you’d like</h2>
            <p>
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.
              <span style={{ color: "#42a862" }}>Learn how</span>
            </p>
          </div>
          <div className="box1">
            <img src="./images/rewards/no3.jpg" alt="image not found" />
            <h2>Earn Stars, get Rewards</h2>
            <p>
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </p>
          </div>
        </div>
      </div>
      <div className="favorites">
        <div className="top__part">
          <div className="heading">
            <h1>Get your favorites for free</h1>
          </div>
          <ul>
            <li onClick={() => setCount(0)}>
              <h4>
                25 <span style={{ color: "gold" }}>★</span>
              </h4>
            </li>
            <li onClick={() => setCount(1)}>
              <h4>
                50 <span style={{ color: "gold" }}>★</span>
              </h4>
            </li>
            <li onClick={() => setCount(2)}>
              <h4>
                150 <span style={{ color: "gold" }}>★</span>
              </h4>
            </li>
            <li onClick={() => setCount(3)}>
              <h4>
                200 <span style={{ color: "gold" }}>★</span>
              </h4>
            </li>
            <li onClick={() => setCount(4)}>
              <h4>
                400 <span style={{ color: "gold" }}>★</span>
              </h4>
            </li>
          </ul>
        </div>
        <div className="bottom__part">
          <div className="one">
            <div className="left_side">
              <img src={item[count].image} alt="image not found" />
            </div>
            <div className="right_side">
              <h1>{item[count].heading}</h1>
              <p>{item[count].peragraph}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="endless__extras">
        <div className="heading">
          <h1>Endless Extras</h1>
          <p>
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>
        </div>
        <div className="box">
          <div className="box1">
            <img src="./images/rewards/ex1.jpg" alt="image not found" />
            <h2>Fun freebies</h2>
            <p>
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </p>
            <Link to="detail">Learn more</Link>
          </div>
          <div className="box1">
            <img src="./images/rewards/ex2.jpg" alt="image not found" />
            <h2>Order & pay ahead</h2>
            <p>
              Enjoy the convenience of in-store, curbside or drive-thru pickup
              at select stores.
            </p>
            <Link to="detail">Learn more</Link>
          </div>
          <div className="box1">
            <img src="./images/rewards/ex3.jpg" alt="image not found" />
            <h2>Get to free faster</h2>
            <p>
              Earn Stars even quicker with Bonus Star challenges, Double Star
              Days and exciting games.
            </p>
            <Link to="detail">Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
