import React from "react";
import Grid from "../component/Grid"
import FilterButtons from "../component/FilterButtons";
export default function Bookmark() {
    const items = [1,2,3,4,5,6];

    return(
        <div className="wrapper bookmark-body">
               <FilterButtons/>
           
           {/* <div><FilterButton/></div> */}
            <div className="product-list" ><Grid items={items}/></div>
        </div>
    )
}