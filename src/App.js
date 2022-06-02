import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isManager, setIsManager] = useState(false);

  const displayDefault = () => {
    if (loggedIn) return (
     <Home /> 
    )
    else return (<Login />)
  };


  const displayMenu = () => {
    if (loggedIn) return (
      <Login />
    )
  };


  return (
    <div className="App">
      <header className="App-header">
        {displayLogin()}
        <MySkills />
      </header>
    </div>
  );
}

export default App;
