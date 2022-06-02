import './App.css';
import Login from './components/login/Login';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState([false]);
  const [isManager, setIsManager] = useState([false]);

  const displayLogin = () => {
    if (!loggedIn) {
      <Login />
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        {displayLogin()}
        {/* MySkills */}
      </header>
    </div>
  );
}

export default App;
