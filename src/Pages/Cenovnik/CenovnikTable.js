import React from "react";
import "./Cenovnik";

function CenovnikTable(props) {

  return (
   
      <tr>
        <td colSpan={2}>{props.title}</td>
        <td colSpan={2}>{props.price}</td>
      </tr>
  
  );
}

export default CenovnikTable;
