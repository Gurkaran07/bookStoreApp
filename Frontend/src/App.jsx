import React from 'react'
import Home from './home/Home'
import {Route, Routes} from "react-router-dom"
import Courses from "./courses/courses";
import Signup from './components/Signup';
import Contactus from './components/Contactus';
function App() {
  return (
    <>
   <div>
   <Routes className = "dark:bg-slate-900 dark:text-white">
    <Route path="/" element ={<Home/>}/>
    <Route path="/course" element ={<Courses/>}/>
    <Route path="/signup" element ={<Signup/>}/>
    <Route path="/contactus" element ={<Contactus/>}/>
   </Routes>
   </div>

    </>
  )
}

export default App


