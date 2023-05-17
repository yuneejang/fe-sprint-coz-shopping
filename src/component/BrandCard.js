import React from 'react'
import BookmarkIcon from "./BookmarkIcon"
export default function BrandCard({item}) {

  return (
    <div className="item-wrapper" key={item.id} >
      {/* <img className="item-img" src={`${process.env.PUBLIC_URL}/{item.img}`} alt={item.name}></img> */}
      <img className="item-img" src={item.img } alt={item.name}></img>
      {/* 북마크된부분다시처리 */}
      <BookmarkIcon className="item-bookmark"/>
      <div className="item-info-1">추가정보1</div>
      <div className="item-info-interest">관심고객수</div>
      <div className="item-info-interest-numbers">추가정보2</div>
   </div>
  )
}

