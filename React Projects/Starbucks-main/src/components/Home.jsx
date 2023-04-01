import { Link } from "react-router-dom";

// scss
import "../style/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="label1">
        <div className="left__side">
          <img src="./images/img1.jpg" alt="image not found" />
        </div>
        <div className="right__side">
          <div className="content">
            <h1>Fall at your fingertips</h1>
            <p>
              Ordering your fall favorites is a snap with the app. Join
              Starbucks® Rewards and tap into fall.
            </p>
            <Link to="create">
              <button>Join now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="label2">
        <div className="left__side">
          <div className="content">
            <h1>Buy coffee, help grow a community</h1>
            <p>
              We care deeply about coffee farmers and their communities. Your
              support helps us invest in the well-being of farmers across the
              world’s coffee-growing regions.
            </p>
            <Link to="detail">
              <button>Learn more</button>
            </Link>
          </div>
        </div>
        <div className="right__side">
          <img src="./images/img2.png" alt="image bot found" />
        </div>
      </div>

      <div className="label3">
        <div className="right__side">
          <img src="./images/img3.jpg" alt="image bot found" />
        </div>
        <div className="left__side">
          <div className="content">
            <h1>The art of the roast</h1>
            <p>
              With a new roast spectrum front and center on our coffee bags,
              it’s easier than ever to find a taste you love.
            </p>
            <Link to="menu">
              <button>Order now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="label4">
        <div className="left__side">
          <div className="content">
            <h1>Nitro all fall long</h1>
            <p>
              Ready on tap, super-smooth Nitro Cold Brew. For a silky twist, try
              Vanilla Sweet Cream Nitro Cold Brew.
            </p>
            <Link to="menu">
              <button>Order now</button>
            </Link>
          </div>
        </div>
        <div className="right__side">
          <img src="./images/img4.jpg" alt="image bot found" />
        </div>
      </div>

      <div className="label5">
        <div className="left__side">
          <img src="./images/img5.jpg" alt="image not found" />
        </div>
        <div className="right__side">
          <div className="content">
            <h1>Deliciously protein-packed</h1>
            <p>
              Keep on the move with a Bacon, Gouda & Egg Sandwich or Egg White &
              Roasted Red Pepper Egg Bites.
            </p>
            <Link to="detail">
              <button>Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="label6">
        <div className="right__side">
          <div className="content">
            <h1>Celebrate Latinx Heritage Month</h1>
            <p>
              See how the Starbucks Hora del Café Partner (employee) Network is
              taking action to build stronger and kinder communities for all.
            </p>
            <Link to="detail">
              <button>Learn more</button>
            </Link>
          </div>
        </div>
        <div className="left__side">
          <img src="./images/img6.jpg" alt="image not found" />
        </div>
      </div>
    </section>
  );
}
