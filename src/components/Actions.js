import React from "react";

import "../styles/Actions.css";

const Actions = (props) => {

return (
  <div className="actions">
      <button onClick={()=>{window.print()}}>Generate PDF</button>
      <button onClick={props.reset}>Reset</button>
   </div>
  )

}

export default Actions;