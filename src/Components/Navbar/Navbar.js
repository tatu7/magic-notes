import React from "react";
import "./navbar.scss";
import "../../main.scss";

function Navbar(props) {
  const handleClick = function () {
    props.setTheme(!props.theme);
  };
  return (
    <div className="container">
      <div className="nav">
        <h2
          className="nav--logo"
          style={{ color: props.theme ? "green" : "red" }}
        >
          Magic
          <span
            className="nav--logo--span"
            style={{ color: props.theme ? "black" : "white" }}
          >
            Notes
          </span>
        </h2>
        <button className="nav--toggle--btn" onClick={handleClick}>
          {props.theme ? (
            <i
              className="moon icon"
              style={{ color: "black", fontSize: "2rem" }}
            ></i>
          ) : (
            <i
              class="sun icon"
              style={{ color: "yellow", fontSize: "2rem" }}
            ></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
