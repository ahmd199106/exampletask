import React from "react";

function AllOption({name, buttonName, selected, handleSelected}) {
  
  return <div className= "allOption" style={{backgroundColor:selected===buttonName&&'grey'}} onClick={()=>handleSelected(buttonName)} >{name}</div>;
}

export default AllOption;
