import { Link } from "react-router-dom";
// scss
import "../style/pageNotFound.scss";

export default function PageNotFound() {
  return (
    <section className="pageNotFound">
      <h1>Oops!</h1>
      <p>Error 404-Page Not Found</p>
      <p className="text">
        The page you requested could not be found. We're working on it{" "}
        <span>:)</span>
      </p>
      <img src="./images/error.png" alt="" width="450px" />
      <Link to="/">
        <button>Go back</button>
      </Link>
    </section>
  );
}
