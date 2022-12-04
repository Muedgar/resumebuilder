import React, {useRef} from 'react';

import ReactToPrint from 'react-to-print';

import './App.css';


import LandingPage from './landingpage/landingpage';
import ActionButtons from './landingpage/components/actionbuttons/actionbuttons';
import OtherActionButtons from './landingpage/components/actionbuttons/otheractionbuttons';

function App() {
  const componentRef = useRef();
  // const pageStyl = `
  //     #cvId {
  //      margin:5px;
  //      border: 2px solid black;
  //     }
  //     #introductionId {
  //       width: 95%;
  //       padding-left: 5px;
  //       word-wrap: break-word;
  //     }
  // `;
  return (
    <div className="App">
      
      <LandingPage ref={componentRef} />
      <div className='actionButtonClass'>
      <ReactToPrint
        // pageStyle={pageStyl}
        trigger={() => <div className='downloadContainer'><button>Download CV</button></div>}
        content={() => componentRef.current}
      />
      <ActionButtons />
      <OtherActionButtons />
      </div>
    </div>
  );
}

export default App;
