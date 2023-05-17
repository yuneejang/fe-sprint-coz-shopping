import React from "react";
import Item from "./Item";
function Grid({items}) {
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div
//       style={{
//         // margin: "50px",
//         // padding: "50px",
//         width: "480vh",
//         heith:"480vh",

//         width: "264px",
// height: "264px",
//         display: "grid",
//         gridTemplateRows: "1fr ",
//         gridTemplateColumns: "1fr 1fr 1fr 1fr",
//         backgroundColor: "gray",
//       }}
    >
      {items.map((item, idx) => (
        <Item item={item}
          key={idx}
          // style={{ margin: "5px", backgroundColor: "white", height: "90px" }}
        >
        </Item>
        
       
      ))}
    </div>
  );
}

export default Grid;