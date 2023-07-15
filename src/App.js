import React from 'react';
import './index.css';
import Img3D from './components/3D';
import SignUpForm from './components/SignUpForm';
function App() {
  return (
    <div className="Container">
      <div className='img3D'>
        <Img3D />
      </div>
      <div className='form-control'>
        <SignUpForm/>
      </div>
    </div>
  );
}

export default App;
