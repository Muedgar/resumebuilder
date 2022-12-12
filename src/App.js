import React, {useRef, useState,useEffect} from 'react';

import ReactToPrint from 'react-to-print';

import './App.css';

import getData from "./landingpage/components/actionbuttons/getData";


import LandingPage from './landingpage/landingpage';
import ActionButtons from './landingpage/components/actionbuttons/actionbuttons';
import Auth from './auth/auth';

import logo from "./logo.svg";


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
  getData();
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
          <div><img style={{width: '50px', height: '50px'}} src={logo} alt="logo" /><h1>ResumeBuilder</h1></div>
          <h1 onClick={() => {
            console.log("clicked");
            document.querySelector(".actionsDiv").classList.toggle("actionsDivShow");
          }} className='moreaction'>{sessionStorage.getItem("currentlyLoggedIn")}</h1>
          <section className='actionsDiv'>
          <button onClick={() => {
            sessionStorage.clear();
            window.location = "/";
          }}>Logout</button>
          </section>
        </div>
        <LandingPage ref={componentRef} />
      <div className='actionButtonClass'>
      <ReactToPrint
        pageStyle={pageStyl}
        trigger={() => <div className='downloadContainer'><button>Download CV</button></div>}
        content={() => componentRef.current}
      />
      <ActionButtons />
      </div>
        </>
        :
        <>
        
        <div className='navbar'>
          <div><img style={{width: '50px', height: '50px'}} src={logo} alt="logo" /><h1>ResumeBuilder</h1></div>
          
        </div>
        <div style={{width: '100vw', height: '70px'}}></div>
          {/* show auth screen */}
          <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        <Auth/>
        </>
      }
      
    </div>
  );
}

export default App;
