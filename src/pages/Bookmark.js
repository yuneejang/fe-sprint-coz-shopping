import React from "react";
import Grid from "../component/Grid"
import FilterButton from "../component/FilterButton";
export default function Bookmark() {
    const items = [1,2,3,4,5,6];

    return(
        <div className="wrapper bookmark-body">
           북마크 메인페이지입니다.
           
           <div><FilterButton/></div>
            <div className="product-list" ><Grid items={items}/></div>
        </div>
    )
}