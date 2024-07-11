import React from 'react';
import About from './components/About';
import Contact from './components/contact';
import Project from './components/Project';
import Skills from './components/Skills'; 


export default function App(){
  return(
    <main className='text-gray-400 bg-gray-900 body-font'>
    <About/>
    <Contact/>
    <Project/>
    <Skills/>
    </main>

  );
}
