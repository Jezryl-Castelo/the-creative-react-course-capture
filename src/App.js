import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
//src/pages/AboutUs.js

function App() {
  return (
    <div className="App">
      <GlobalStyle />
     <AboutUs />
    </div>
  );
}

export default App;
