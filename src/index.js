import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todos from "./Todos";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blogs from './pages/Blogs';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/Nopage';
import NewContact from './pages/NewContact';
import NewnewContact from './pages/NewnewContact';
import NewnewContactss from './pages/NewContactss';
import NewContactss1 from './pages/NewContactss1'



ReactDOM.render(
  <React.StrictMode>
    
    <div>
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/> 
<Route path="blogs" element={<Blogs/>}/>
<Route path="contact" element={<Contact/>}/>
<Route path="NewContactss1" element={<NewContactss1/>}/>
<Route path="newContact" element={<NewContact/>}/>
<Route path="NewContactss1" element={<NewContactss1/>}/>
<Route path="*" element={<NoPage/>}/> 
</Route>
</Routes>
</BrowserRouter>
</div>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
