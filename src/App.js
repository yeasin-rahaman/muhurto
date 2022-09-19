import React from 'react';
import messageIcon from './Assets/Images/message-icon.png'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Test from './Component/Test/Test';
import Test2 from './Component/Test/Test2';
import Test3 from './Component/Test/Test3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test2' element={<Test2 />} />
        <Route path='/test3' element={<Test3 />} />

      </Routes>
      <a href="https://www.facebook.com/muhurtooo" target="_blank">
        <button className='btn-shadow' id='fixedbutton'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg> */}

          <img src={messageIcon} className='img-fluid' alt="" />
        </button>
      </a>
    </Router >
  );
}

export default App;
