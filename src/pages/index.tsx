import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import { Subject } from "rxjs";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import WordFlipper from "../components/word-flipper/word-flipper";
import '../style/style.scss'; 
import { ParticleEffect } from '../components/particle/particle';
import {onMount, setupPageContent} from '../scripts/page-effects';
import AboutMe from "../components/about-me/about-me";
import Hero from "../components/hero/hero";

export const DarkModeContext = React.createContext({});

const IndexPage = () => {
  ParticleEffect();
  const [darkMode, setDarkMode] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark2)').matches);
  onMount();
  setupPageContent();
 
  const saveDarkMode = (value: boolean) => {
    setDarkMode(value);
  }

  return (
    <DarkModeContext.Provider value={{useDarkMode: darkMode, saveDarkMode}}>
      <main className={darkMode ? '-dark': ''}>
        <title>Home Page</title>
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
