import React from 'react'
import BookmarkIcon from "./BookmarkIcon"
export default function Item({item}) {

  return (
    <div className="item-wrapper" key={item.id} >
      {/* <img className="item-img" src={`${process.env.PUBLIC_URL}/{item.img}`} alt={item.name}></img> */}
      <img className="item-img" src={item.img } alt={item.name}></img>
      {/* 북마크된부분다시처리 */}
      {/* <img
           className="item-bookmark"
          
           src={`${process.env.PUBLIC_URL}/images/bookmark-off.png`}
           alt="bookmark"
          />
          <Bookmark/> */}
          <BookmarkIcon className="item-bookmark"/>
      <div className="item-info-1">추가정보1</div>
          {/* <img
           id="bookmark"
           src={`${process.env.PUBLIC_URL}/images/bookmark-off.png`}
           alt="bookmark"
          /> */}
      <div className="item-info-2">추가정보2</div>
   </div>
  )
}

