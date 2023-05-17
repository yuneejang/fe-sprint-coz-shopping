import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

function Nav({isOpen,setIsOpen}) {
    const handleClick = () =>{
        setIsOpen(!isOpen)
      }

   return(
        <div id ="nav-body">
           
           <div id="nav-logo">
           <Link to="/"> 
                <img
                    src={`${process.env.PUBLIC_URL}/images/nav-logo.png`}
                    alt="logo-nav"
                />
                
            </Link>
            </div>
            <div id ="title">
            <Link to="/"> 
            COZ Shopping
            </Link>         
            </div>          
           
         <div id="nav-menu">
           <img
            src={`${process.env.PUBLIC_URL}/images/nav-menu.png`}
            alt="menu"
            onClick={handleClick} />    
            
            {isOpen&&<DropDown/>}
         </div>
         
         
        </div>
    );


}

export default Nav;
