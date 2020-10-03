import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";


import "./App.css";

function App() {
  
  const [selected, setSelected] = useState(0)

  const handleSelected =(number)=> {
    setSelected(number)
  }

  return (
    <div>
      <NavBar selected={selected} handleSelected={handleSelected}  />
      <Content selected={selected} />
    </div>
  );
}

export default App;
