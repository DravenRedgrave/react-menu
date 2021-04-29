import React, {useState,useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen,setIsOpen] = useState(false);
  const toggle =()=>{
    setIsOpen(!isOpen);
  };
useEffect(()=>{
  const hiddenMenu = () => {
    if(window.innerWidth > 768 && isOpen)
    setIsOpen(false)
  }
  window.addEventListener('resize',hiddenMenu)
  return () => {
    window.removeEventListener('resize',hiddenMenu)
  }
})

  return (
    <>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/About" exact component={About}/>
      <Route path="/Menu" exact component={Menu}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
