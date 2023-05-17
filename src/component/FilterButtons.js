import React from 'react'
// import Total from '../images/filter-total'

// export default function FilterButton({ item, handleClick }) {
export default function FilterButtons(filterIcon) {

    return (
    <div className='filter-wrapper wrapper'>
        <div className='filter-button'>
         <img className="filter-icon" src='../images/filter_images/filter-total.png' alt="전체"></img>
         <div className="filter-text">전체</div>
        </div>
        <div className='filter-button'>
         <img className="filter-icon" src='../images/filter_images/filter-product.png' alt="상품"></img>
         <div className="filter-text">상품</div>
        </div>
        <div className='filter-button'>
         <img className="filter-icon" src='../images/filter_images/filter-category.png' alt="카테고리"></img>
         <div className="filter-text">카테고리</div>
        </div>
        <div className='filter-button'>
         <img className="filter-icon" src='../images/filter_images/filter-exhibition.png' alt="기획전"></img>
         <div className="filter-text">기획전</div>
        </div>
        <div className='filter-button'>
         <img className="filter-icon" src='../images/filter_images/filter-brand.png' alt="브랜드"></img>
         <div className="filter-text">브랜드</div>
        </div>
    </div>
  )
}

