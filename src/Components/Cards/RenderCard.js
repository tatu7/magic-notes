import React from "react";

function RenderCard(props) {
  let date = new Date().toLocaleDateString();

  return (
    <>
      {props.arr.map((val) => {
        return (
          <div className="card" key={val.id} id={val.id}>
            <textarea
              onInput={props.writeElement}
              cols="30"
              rows="10"
              className="card--input-2"
              value={val.title}
            ></textarea>
            <div className="card--footer">
              <p className="card--limit">{date}</p>
              <button className="card--delete-btn" onClick={props.deleteFunc}>
                <i className=" trash alternate icon"></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RenderCard;
