import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ShoeShopState from './context/ShoeShopState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ShoeShopState>
       <BrowserRouter>
          <App />
       </BrowserRouter>
</ShoeShopState>
);


