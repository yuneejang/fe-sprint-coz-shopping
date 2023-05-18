import React,{useState} from 'react'
import BookmarkIcon from "./BookmarkIcon"
import Modal from 'react-modal';

export default function CategoryCard({item}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="item-wrapper" key={item.id} >
         <img className="item-img" 
        src={item.img } 
        // src="../images/Modal-1.png"
        alt={item.name}  
        onClick={()=> setIsModalOpen(true)}
      />
      
      <BookmarkIcon className="item-bookmark"/>
      <div className="item-info-name">카테고리이름</div>
      <Modal  className ="modal-wrapper"isOpen={isModalOpen} onClick={()=> setIsModalOpen(false)} onRequestClose={() => setIsModalOpen(false)}>
   <div className="close-btn">&times;</div>
   <img 
     src={item.src}
     alt={item.name}
     onClick={()=> setIsModalOpen(true)}
     />   
   </Modal>
   </div>
   
 
  )
}

