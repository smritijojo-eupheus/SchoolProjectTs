import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,
  Route,
  Link } from "react-router-dom";
import SideNav from './component/nav/SideNav';
import TopNav from './component/nav/TopNav';
import Home from './pages/admin/Home';
import Login from './pages/login/Login';

function App() {
  const [sideopen, setSideopen] = useState(true)
  return (
    <>
    
       <main className='w-screen relative'>
        
     <Router>
       <SideNav sideopen={sideopen} setSideopen={setSideopen} />
       <TopNav sideopen={sideopen} setSideopen={setSideopen} />
       <section className={`pt-[8vh] absolute  z-[-99] ${sideopen ? 'left-[0.5rem]  md:left-[20rem] lg:left-[20rem]  w-[82vw] ' : 'left-[0.5rem] sm:left-[0.5rem] md:left-[6rem]  w-[94vw]'} duration-500 `}>
        <hr className='' />
        <section className=''>
        <Routes>
         <Route path="/" element={    <Home />} />
         <Route path="/user" element={    <Home />} />
         <Route path="/message" element={    <Home />} />
         <Route path="/setting" element={    <Home />} />
       </Routes>
        </section>
       </section>
       
   </Router>
       </main>
   
    </>
    
  );
}

export default App;
