import "./Nav.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../ContextProvider/Context";
function Nav(props) {
  // const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="title flexC">
        <h2>GEEKSTER </h2>
      </div>

      <div className="menu flexC">
        <Link to="/">Home</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/useref">UseRef</Link>
        <Link to="/products">Products</Link>
        <Link to="/form">Form</Link>
        {/* {isLoggedIn ? (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null} */}
      </div>
    </div>
  );
}

export default Nav;
