import React, { useState } from "react";
import Card from "./Components/Cards/Cards";
import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar";
import "./main.scss";
function App() {
  const [theme, setTheme] = useState(true);
  const [element, setElement] = useState({ title: "", limit: 300, id: 0 });
  const [arr, setArr] = useState([]);
  return (
    <div className="App" style={{ backgroundColor: theme ? "white" : "black" }}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Form
        element={element}
        setElement={setElement}
        arr={arr}
        setArr={setArr}
      />
      <Card
        element={element}
        setElement={setElement}
        arr={arr}
        setArr={setArr}
      />
    </div>
  );
}

export default App;
