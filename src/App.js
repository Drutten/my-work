import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import MySkills from './components/my-skills/MySkills';
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
    
  };


  return (
    <div className="App">
      <header className="App-header">

        {displayDefault()}
        <MySkills />
      </header>
    </div>
  );
}

export default App;
