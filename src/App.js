import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

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
