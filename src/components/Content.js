import React, {useState, useEffect} from "react";

function Content({  selected }) {

  const [loading, setLoading] = useState(false)

 
useEffect(()=> {
  setLoading(true)
  // delay the content to load

  setTimeout(()=> {
    setLoading(false)
  }, 2000)

},[selected])
  return (
    <div style={{marginTop: "5rem", border: "1px solid black", height: "50vw", width: "100%"}}>
      {/* we can create a progress bar but it bit time consuming, as i don't know :P */}
      {loading?<p>loding ...</p>: <h1 style={{textAlign: "center", marginTop: "10%"}}>Currently Selected : { selected===0? '> opt 1, opt 3 <':selected }</h1>}
      okkk
      
    </div>
  );
}

export default Content;
