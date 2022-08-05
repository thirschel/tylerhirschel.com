import * as React from "react"
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import { ParticleEffect } from '../components/particle/particle';
import {onMount, setupPageContent} from '../scripts/page-effects';
import AboutMe from "../components/about-me/about-me";
import Hero from "../components/hero/hero";
import '../style/style.scss'; 
import ThemeToggle from "../components/theme-toggle/theme-toggle";

const IndexPage = () => {
  var localStorageDarkModeValue = typeof localStorage !== 'undefined' ? localStorage.getItem('darkMode') : null;
  const [darkMode, setDarkMode] = React.useState(localStorageDarkModeValue ? localStorageDarkModeValue === 'true' ? true : false : false);
  ParticleEffect();
  onMount();
  setupPageContent();
 
  const saveDarkMode = (value: boolean) => {
    setDarkMode(value);
    if(typeof localStorage !== 'undefined') {
      localStorage.setItem('darkMode', value.toString());
    }
  }

  return (
      <main className={darkMode ? '-dark': ' '}>
        <Header></Header>
        <Hero/>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Footer></Footer>
        <ThemeToggle checked={darkMode} setter={saveDarkMode} size={40}></ThemeToggle>
      </main>
  )
}

export default IndexPage

export function Head() {
  return (
    <>
      <title>Tyler Hirschel - Software Engineer</title>
      <meta name="description" content="Chicago based, full stack, software engineer and architect"></meta>
    </>
  )
}
