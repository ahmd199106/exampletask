import React from "react";
import AllOption from "./AllOption";
import OptButton from "./OptButton";

export default function NavBar({ selected, handleSelected }) {
  return (
    <div
      className="NavBar"
      style={{
        display: "inline-flex",
        margin: "5px",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        padding: "10px"
      }}
    >
      <AllOption
       name="All"
       buttonName={0}
       selected={selected}
       handleSelected={handleSelected}
      />
      <OptButton
        name="Option 1"
        selected={selected}
        buttonName={1}
        handleSelected={handleSelected}
      />
      <OptButton
        name="Option 2"
        selected={selected}
        buttonName={2}
        handleSelected={handleSelected}
      />
      <OptButton
        name="Option 3"
        selected={selected}
        buttonName={3}
        handleSelected={handleSelected}
      />
    </div>
  );
}
