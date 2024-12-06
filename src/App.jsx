import React, { useRef } from 'react';
import Header from "./Components/Header"
import Intro from "./Components/Intro"
import About from "./Components/About"
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToIntro = () => {
    homeRef.current.scrollIntoView({behavior : 'smooth'});
  }

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <Header scrollToAbout = {scrollToAbout} scrollToProjects = {scrollToProjects} scrollToIntro = {scrollToIntro} />
      <div ref = {homeRef}><Intro /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <Footer />
    </>
  )
}

export default App;
