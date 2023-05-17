import React from "react";
import Grid from "../component/Grid";
import FilterButton from "../component/FilterButton";

export default function Products({filterIcons, setFilters,items ,setItems}) {
 
// const handleClick = ()=>{
//     setFilters();setItems();
// }
    return(
        <div className="wrapper product-body">
            <div className="filter-button"> 
               {filterIcons.map((filterIcon, idx) => (
                    <FilterButton filterIcon={filterIcon}  key={idx} />
                ))}
            </div>
            <div className="product-list" >
                <Grid items={items}/>
            </div>
        </div>
    )
}