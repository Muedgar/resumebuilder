import React, {useRef} from 'react';

import ReactToPrint from 'react-to-print';

import './App.css';


import LandingPage from './landingpage/landingpage';

function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      
      <LandingPage ref={componentRef} />
      <ReactToPrint
        trigger={() => <div className='downloadContainer'><button>Download CV</button></div>}
        content={() => componentRef.current}
      />
    </div>
  );
}

export default App;
