import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// importaciones de react router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PageNoFound from './pages/PageNoFound';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='*' element={<PageNoFound />} />
    </Routes>
  </BrowserRouter >
);
reportWebVitals();
