import React from 'react';
import { Link } from 'react-router-dom';


function DropDown()  {
  // const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
 
  return (

  <div id="drop-wrapper" >
        <img
          id="poligon"
          src={`${process.env.PUBLIC_URL}/images/polygon.png`}
          alt="polygon"
          />
      <div className="drop-down">
        <Link to="/" className="drop-menu "  role="menuitem" tabIndex="-1" id="menu-item-0">
          <div className='drop-hello'>ooo님 안녕하세요 !</div>
          </Link>
              
        <Link to="/products/list" className="drop-menu" role="menuitem" tabIndex="-1" id="menu-item-1">
       
          <img
                    id="drop-icon"
                    src={`${process.env.PUBLIC_URL}/images/product-icon.png`}
                    alt="product-icon"
          />
            
            <div id='drop-link'> 상품리스트 페이지</div>
          </Link>
       
        
          <Link to="/bookmark" className="drop-bookmark" role="menuitem" tabIndex="-1" id="menu-item-2"> 
          <img
                    id="drop-icon"
                    src={`${process.env.PUBLIC_URL}/images/bookmark-icon.png`}
                    alt="bookmark-icon"
                />
                
                <div id='drop-link'>북마크 페이지</div>
     
          </Link>
        </div >
  </div>

  )
}

export default  DropDown;