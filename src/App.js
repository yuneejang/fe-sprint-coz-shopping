import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import MainPage from './Page/MainPage';
import Footer from './Component/Footer';
import ProductsListPage from './Page/ProductsListPage';
import BookMarkPage from './Page/BookMarkPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products/list' element={<ProductsListPage />} />
        <Route path='/bookmark' element={<BookMarkPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
