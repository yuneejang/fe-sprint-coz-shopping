import React from 'react'
import BookmarkIcon from "./BookmarkIcon"
export default function ProductCard({item}) {

  return (
    <div className="item-wrapper" key={item.id} >
      {/* <img className="item-img" src={`${process.env.PUBLIC_URL}/{item.img}`} alt={item.name}></img> */}
      <img className="item-img" src={item.img } alt={item.name}></img>
      {/* 북마크된부분다시처리 */}
      <BookmarkIcon className="item-bookmark"/>
      <div className="item-info-product-name">상품이름</div>
      <div className="item-info-discount">%</div>
      <div className="item-info-price">1000원</div>
   </div>
  )
}

