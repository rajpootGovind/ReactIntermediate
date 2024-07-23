
import './App.css';
import {Link, Route,Routes} from "react-router-dom"
import About from './components/About';
import Error from './components/Error';
import Lab from './components/Lab';
import Supports from './components/Support';
import Home from './components/Home';
import { NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';

function App() {
 
  return (
    <div className="App">
    <nav>
    <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/lab">Lab</NavLink>
    </li>
    
    <li>
    <NavLink to="/support">Support</NavLink>
    </li>
  </ul>
    </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route index element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/support" element={<Supports/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="*" element={<Error/>}></Route>
         <Route path="/lab" element={<Lab/>}></Route>
         </Route>
      </Routes>
    </div>
  );
}

export default App;
