import React from 'react';
import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
   <div className='app-wrapper'>
     <Header className='header' />
     <Navbar className='nav'/>
     <Profile className='profile'/>
   </div>
  );
}


export default App;
