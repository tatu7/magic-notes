function CreaterCard(props) {
  const { writeElement, element, addElement, initial } = props;

  return (
    <div className="card " style={{ backgroundColor: "crimson" }}>
      <textarea
        onInput={writeElement}
        cols="30"
        rows="10"
        className="card--input"
        placeholder="This is my second note"
        defaultValue={initial}
      ></textarea>
      <div className="card--footer">
        <p className="card--limit">{element.limit}/300 Remaining</p>
        <button onClick={addElement} className="card--button">
          Save
        </button>
      </div>
    </div>
  );
}

export default CreaterCard;
