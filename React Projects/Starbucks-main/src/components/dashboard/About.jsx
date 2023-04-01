// scss
import "../../style/About.scss";

export default function About() {
  let userName = localStorage.getItem("name");
  let userPassword = localStorage.getItem("password");
  return (
    <section className="about">
      <div className="heading">
        <h1>About</h1>
        <p>
          This section tells you all your personal information which you can
          change at any time.
        </p>
      </div>
      <div className="table">
        <table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name or Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{userName}</td>
              <td>{userPassword}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
