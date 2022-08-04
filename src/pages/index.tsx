import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import { Subject } from "rxjs";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import WordFlipper from "../components/word-flipper/word-flipper";
import '../style/style.scss'; 
import { ParticleEffect } from '../components/particle/particle';
import HeroImg from "../assets/images/hero.png";
import {onMount, setupPageContent} from '../scripts/page-effects';

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
        <div className="hero-content container">
          <div className="hero-container">
            <div className="hero-wording">
              <h1 className="hero-title -animation-item">Hey, I'm Tyler</h1>
              <h1 className="hero-subtitle -animation-item">I build things<WordFlipper></WordFlipper></h1>
              <p className="hero-explanation -animation-item">
              I am a Chicago-based software engineer with almost a decade of experience building (and shipping!) software. Currently, I'm at Microsoft focused on making sure the cloud still works when its raining.
              </p>
            </div>
            <div className="hero-image">
              <img src={HeroImg} alt="Tyler Hirschel logo" />
            </div>
          </div>

          <button className="btn contact-btn"><span><span>Lets Talk</span></span></button>
        </div>

        <Projects></Projects>
        <Footer></Footer>
      </main>
    </DarkModeContext.Provider>
  )
}

export default IndexPage
