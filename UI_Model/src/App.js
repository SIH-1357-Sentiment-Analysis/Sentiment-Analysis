import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import { auth } from './firebase';

import React,{useEffect,useState} from 'react';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Details from './components/Details';


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
