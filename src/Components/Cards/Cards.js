import "./card.scss";
import "../../main.scss";
import CreaterCard from "./createrCard";
import RenderCard from "./RenderCard";
import { useState } from "react";

function Cards(props) {
  const [initial, setInitial] = useState("");
  const { element, setElement, arr, setArr } = props;

  let idTemplate;

  ///////////////////////////////////////////
  const writeElement = function (evt) {
    let ayrish = evt.target.value.length;
    idTemplate = Date.now();
    setElement({ title: evt.target.value, limit: ayrish, id: idTemplate });
  };
  /////////////////////////////////////////
  const addElement = function () {
    setInitial("");
    setArr([...arr, element]);
  };
  //////////////////////////////////////
  const deleteFunc = (evt) => {
    let findID;
    if (evt.target.closest(".card")) {
      findID = +evt.target.closest(".card").id;
    }
    let topilgan = arr.findIndex((val) => val.id === findID);
    arr.splice(topilgan, 1);
    setArr([...arr]);
  };

  ////////////////////////////////////////
  return (
    <div className="container">
      <div className="cards">
        <CreaterCard
          writeElement={writeElement}
          element={element}
          addElement={addElement}
          initial={initial}
        />
        <RenderCard
          writeElement={writeElement}
          deleteFunc={deleteFunc}
          arr={arr}
        />
      </div>
    </div>
  );
}

export default Cards;
