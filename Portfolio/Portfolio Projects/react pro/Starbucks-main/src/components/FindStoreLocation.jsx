// scss
import "../style/findStoreLocation.scss";

export default function FindStoreLocation() {
  return (
    <section className="find__store__location">
      <div className="left__side">
        <div className="search__area">
          <input type="search" placeholder="Find a store" />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <button>Filter</button>
        </div>

        <div className="content">
          <h1>We are unable to access your exact location</h1>
          <p>
            To find a Starbucks store, use the search feature, navigate using
            the map, or turn on location services.
          </p>
        </div>
      </div>
      <div className="right__side">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=10UWiXaI2-LObzSQz5qglq_Znnao&hl=en&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
      </div>
    </section>
  );
}
