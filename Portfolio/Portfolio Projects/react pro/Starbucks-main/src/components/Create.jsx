import { useState } from "react";
// scss
import "../style/Create.scss";

export default function Create() {
  let [show, setShow] = useState(false);
  return (
    <section className="create">
      <div className="heading">
        <h1>Create an account</h1>
      </div>
      <div className="rewards">
        <h4>STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <span style={{ cursor: "pointer", textDecoration: "underline" }}>
            more
          </span>
          .
        </p>
      </div>
      <div className="box">
        <p>
          <span style={{ color: "#013221" }}>*</span> indicates required field
        </p>
        <div className="personalInfo">
          <h1>Personal Information</h1>
          <form>
            <input type="text" placeholder="* First name" />
            <input type="text" placeholder="* Last name" />
          </form>
        </div>
        <div className="accountSecurity">
          <h1>Account Security</h1>
          <form>
            <div className="email">
              <input type="text" placeholder="* Email address" />
              <p>This will be your username</p>
            </div>
            <div className="password">
              <input type="password" placeholder="* Password" />
              <p>
                Create a password 8 to 25 characters long that includes at least
                1 uppercase and 1 lowercase letter, 1 number and 1 special
                character like an exclamation point or asterisk.
              </p>
            </div>
          </form>
        </div>
        <div className="giftCard">
          <p onClick={show ? () => setShow(false) : () => setShow(true)}>
            Already have a Starbucks gift card?
            <span style={{ paddingLeft: "1rem" }}>
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </p>

          {show ? (
            <p style={{ fontWeight: "unset", color: "#333" }}>
              Add your gift card to earn Stars when you pay and order ahead.
            </p>
          ) : null}
        </div>
        <div className="star">
          <h3>COLLECT MORE STARS & EARN REWARDS</h3>
          <p>
            Email is a great way to know about offers and what’s new from
            Starbucks.
          </p>
        </div>
        <div className="like_email">
          <input type="checkbox" />
          <div className="content">
            <p>Yes, I’d like email from Starbucks</p>
            <p className="text">
              Know about initiatives, announcements and product offers.
            </p>
          </div>
        </div>
        <div className="terms">
          <h1>TERMS OF USE</h1>
          <div className="check">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <span className="change">Starbucks® Rewards Terms</span> opens in
              new window and the{" "}
              <span className="change">Starbucks Card Terms</span> opens in new
              window and have read the
              <span className="change">Starbucks Privacy Statement</span> opens
              in new window.
            </p>
          </div>
        </div>
        <div className="button1">
          <button>Create account</button>
        </div>
      </div>
    </section>
  );
}
