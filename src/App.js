import React from 'react';
import messageIcon from './Assets/Images/message-icon.png'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Test2 from './Component/Test/Test2';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ReactImageGallery from './Component/Home/Portfolio/ReactImageGallery';
import Test from './Component/Test/Test';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test2' element={<Test2 />} />
        <Route path='/test' element={<Test />} />
        <Route path='/portfolio' element={<ReactImageGallery />} />

      </Routes>


      <div className='d-none'>

        <MessengerCustomerChat
          pageId="544952312372257"
          appId="976994627034300"
        />,
      </div>
    </Router >
  );
}

export default App;
