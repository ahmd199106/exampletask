import React from "react";

function OptButton({ name, buttonName, selected, handleSelected }) {


  return (
    <div style= {{borderStyle: "dashed", borderColor: "black", textAlign: "center", padding: "10px" , backgroundColor:selected===buttonName&&'grey'}}
     className="optButton" onClick={()=>handleSelected(buttonName)}>
    
      {name}
    </div>
  );
}
//Are u there ?
// i get it

export default OptButton;
