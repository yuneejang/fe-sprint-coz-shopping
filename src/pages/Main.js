import React ,{useState}from "react";
import Grid from "../component/Grid";
import { initialState } from '../assets/state';
import ExhibitionCard from  '../component/ExhibitionCard'
import BrandCard from "../component/BrandCard";
import ProductCard from "../component/ProductCard";
import CategoryCard from "../component/CategoryCard";
import Modal from 'react-modal';


export default function Main(item) {
  const productItems = [1, 2, 3, 4];
  const bookmarkItems = [11, 12, 13, 14];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


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
<div className="main-body">
{/*   
<Modal isOpen={isModalOpen} closeModal={closeModal}>
  </Modal> */}
   <div className="main-title-product">상품리스트</div>
<div className="main-list-products">

  {/* <Modal isOpen={isModalOpen} closeModal={closeModal}>
  </Modal> */}
  <ProductCard onClick={openModal} item={item} openModal={openModal} closeModal={closeModal}/>  
  <BrandCard onClick={openModal} item={item}/>  
  <ExhibitionCard onClick={openModal} item={item}/>  
  <CategoryCard onClick={openModal} item={item}/>  
  </div>
   <div className="main-title-bookmark">북마크리스트</div>


   <div className="main-list-bookmark">

  {/* <div className="bookmarkitem"  onClick={openModal}>1</div>    */}
  {/* <div className="bookmarkitem">1</div>   
  <div className="bookmarkitem">1</div>   
  <div className="bookmarkitem">1</div>   

  <button onClick={ openModal }> 모달팝업</button>
                <Modal open={ openModal } close={closeModal } title="Create a chat room">
                    {/* // Modal.js <main> { this.props.children } </main>에 내용이 입력된다. */}
                    {/* 리액트 클래스형 모달 팝업창입니다.
                    쉽게 만들 수 있어요.
                    같이 만들어봐요!
                </Modal> */}
  
  </div>
</div>
        
    )
}