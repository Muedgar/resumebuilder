import React, {useRef, useState,useEffect} from 'react';

import ReactToPrint from 'react-to-print';

import './App.css';


import LandingPage from './landingpage/landingpage';
import ActionButtons from './landingpage/components/actionbuttons/actionbuttons';
import OtherActionButtons from './landingpage/components/actionbuttons/otheractionbuttons';
import Auth from './auth/auth';


function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=> {
    console.log("calling useEffect ...");
    if(sessionStorage.getItem("currentlyLoggedIn")) {
      setIsLoggedIn(true);
    }else {
      setIsLoggedIn(false);
    }
  },[])

  const componentRef = useRef();
  const pageStyl = `
      #cvId {
       margin:5px;
       border: 2px solid black;
      }
      #introductionId {
        width: 95%;
        padding-left: 5px;
        word-wrap: break-word;
      }
  `;
  return (
    <div className="App">
      
      {isLoggedIn?
        <>
        <div className='navbar'>
          <h1>Welcome to Resume Builder</h1>
          <h1>{sessionStorage.getItem("currentlyLoggedIn")}</h1>
          <button onClick={() => {
            sessionStorage.clear();
            window.location = "/";
          }}>Logout</button>
        </div>
        <LandingPage ref={componentRef} />
      <div className='actionButtonClass'>
      <ReactToPrint
        pageStyle={pageStyl}
        trigger={() => <div className='downloadContainer'><button>Download CV</button></div>}
        content={() => componentRef.current}
      />
      <ActionButtons />
      <OtherActionButtons />
      </div>
        </>
        :
        <>
          {/* show auth screen */}
        <Auth/>
        </>
      }
      
    </div>
  );
}

export default App;
