import React from 'react'
import BookmarkIcon from "./BookmarkIcon"
export default function ExhibitionCard({item}) {

  return (
    <div className="item-wrapper" key={item.id} >
      {/* <img className="item-img" src={`${process.env.PUBLIC_URL}/{item.img}`} alt={item.name}></img> */}
      <img className="item-img" src={item.img } alt={item.name}></img>
      {/* 북마크된부분다시처리 */}
      <BookmarkIcon className="item-bookmark"/>
      <div className="item-info-name">기획전카드</div>
      <div className="item-info-detail">기획전설명</div>
   </div>
  )
}

