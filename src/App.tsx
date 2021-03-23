import React from 'react';
import './App.scss';

function App() {
  return (
    <div>
      <h3>Ali Naqi Al-Musawi Here!</h3>
      <h4>My site name is {process.env.REACT_APP_SITE_NAME}</h4>
    </div>
  );
}

export default App;
