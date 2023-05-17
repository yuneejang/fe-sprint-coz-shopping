import React from "react";
import Grid from "../component/Grid";
import { initialState } from '../assets/state';
import ExhibitionCard from  '../component/ExhibitionCard'
import BrandCard from "../component/BrandCard";
import ProductCard from "../component/ProductCard";

export default function Main(item) {
  const productItems = [1, 2, 3, 4];
  const bookmarkItems = [11, 12, 13, 14];

  return(
    //      <div className="main-body">
    //          {/* <div className="main-title-product">상품리스트</div> */}
    //          {/* <div className="main-list-products"> */}
    //          {/* <Grid className="grid" items={productItems}/>
    //     //     <Grid className="grid" items={productItems}/>
    //     //     <Grid className="grid" items={productItems}/> */}
    //          {/* <Grid items={productItems}/></div> */}
    //          {/* </div> */}
    //          {/* <div className="main-title-bookmark">북마크리스트</div> */}
    //          {/* <div className="main-list-bookmark"
    //          ><Grid items={bookmarkItems}/></div>
    // */}
    //      </div>
<div>
  {/* <ExhibitionCard item={item}></ExhibitionCard> */}
{/* <BrandCard item={item}/> */}
<ProductCard item={item}/>
</div>
        
    )
}