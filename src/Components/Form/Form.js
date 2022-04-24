import React from "react";
import "./form.scss";
import "../../main.scss";

function Form(props) {
  const { arr, setArr } = props;
  const searchElement = function (evt) {
    const regex = new RegExp(evt.target.value, "gi");
    const searchEl = arr.filter((film) => film.title.match(regex));
    if (evt.target.value !== "") {
      setArr([...searchEl]);
    } else {
      setArr([...arr]);
    }
  };
  return (
    <div className="container">
      <form className="form">
        <div className="form--search">
          <input
            type="text"
            placeholder=" Search for your notes.."
            onInput={searchElement}
          />
          <i class="form--icon search icon"></i>
        </div>
      </form>
    </div>
  );
}

export default Form;
