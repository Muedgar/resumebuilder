import React, {useRef} from 'react';

import ReactToPrint from 'react-to-print';

import './App.css';


import LandingPage from './landingpage/landingpage';

function App() {
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
      
      <LandingPage ref={componentRef} />
      <ReactToPrint
        pageStyle={pageStyl}
        trigger={() => <div className='downloadContainer'><button>Download CV</button></div>}
        content={() => componentRef.current}
      />
    </div>
  );
}

export default App;
