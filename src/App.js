import React ,{useState} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./component/Nav";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Bookmark from "./pages/Bookmark";
import Empty from "./pages/Bookmark";
import { initialState } from './assets/state';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(initialState.items);
  const [filterIcons, setFilters] = useState(initialState.filtericons);


  return (

      <Router>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/products/list" element={<Products filterIcons={filterIcons} setFilters={setFilters} items={items} setItems={setItems} />}/>          
          <Route path="/bookmark" element={<Bookmark filterIcons={filterIcons} setFilters={setFilters} />}/>
          <Route path="/*" element={<Empty/>}/>

        </Routes>
        <footer>
          <div className="policy">개인정보 처리방침 | 이용 약관</div>
          <div className="rights">All rights reserved @ Codestates</div>
        </footer>
      </Router>

  );
}

export default App;
