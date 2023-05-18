import React from 'react'
import BookmarkIcon from "./BookmarkIcon"
export default function CategoryCard({item}) {

  return (
    <div className="item-wrapper" key={item.id} >
      {/* <img className="item-img" src={`${process.env.PUBLIC_URL}/{item.img}`} alt={item.name}></img> */}
      <img className="item-img" src='../images/Modal-1.png' alt={item.name}></img>
      {/* 북마크된부분다시처리 */}
          <BookmarkIcon className="item-bookmark"/>
      <div className="item-info-name">카테고리이름</div>
   </div>
  )
}

