import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

import {BrowserRouter, Routes,Route} from 'react-router-dom'

import {ProductsPage} from './pages/ProductsPage'
import {AboutPage} from './pages/AboutPage'
import {ContactPage} from './pages/ContactPage'
import {HomePage} from './pages/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/home' element={<HomePage/>}/>

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
