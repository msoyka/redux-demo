import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileAuth from './ProfileAuth';
// import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProfileAuth />
        {/* <Counter /> */}
      </header>
    </div>
  );
};

export default App;