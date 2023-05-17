import React from "react";
import Grid from "../component/Grid";
import FilterButton from "../component/FilterButton";
import FilterButtons from "../component/FilterButtons"
export default function Products({filterIcons, setFilters,items ,setItems}) {
 
// const handleClick = ()=>{
//     setFilters();setItems();
// }
    return(
        <div className="wrapper product-body">
               <FilterButtons/>
            <div className="product-list" >
                <Grid items={items}/>
            </div>
        </div>
    )
}