import * as React from "react"
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import { ParticleEffect } from '../components/particle/particle';
import {onMount, setupPageContent} from '../scripts/page-effects';
import AboutMe from "../components/about-me/about-me";
import Hero from "../components/hero/hero";
import '../style/style.scss'; 

export const DarkModeContext = React.createContext({});

const IndexPage = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  ParticleEffect();
  onMount();
  setupPageContent();
 
  const saveDarkMode = (value: boolean) => {
    setDarkMode(value);
  }

  return (
    <DarkModeContext.Provider value={{useDarkMode: darkMode, saveDarkMode}}>
      <main className={darkMode ? '-dark': ' '}>
        <title>Tyler Hirschel - Software Engineer</title>
        <Header></Header>
        <Hero/>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Footer></Footer>
      </main>
    </DarkModeContext.Provider>
  )
}

export default IndexPage
