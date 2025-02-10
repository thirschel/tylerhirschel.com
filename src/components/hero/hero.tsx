import * as React from "react"
import HeroImg from "../../assets/images/hero.png";
import WordFlipper from "../../components/word-flipper/word-flipper";
import {jumpToContactSection} from '../../scripts/page-effects';
import "./hero.scss";


const Hero = () => {

  return (
    <section className="hero-content container">
          <div className="hero-container">
            <div className="hero-wording">
              <h1 className="hero-title -animation-item">Hey, I'm Tyler</h1>
              <h1 className="hero-subtitle -animation-item">I build<WordFlipper></WordFlipper></h1>
              <p className="hero-explanation -animation-item">
              I am a Chicago-based software engineer with more than a decade of experience building (and shipping!) software. Currently, I'm at Microsoft focused on making sure the cloud still works when its raining.
              </p>
              <button onClick={jumpToContactSection} className="btn contact-btn -animation-item"><span><span>Lets Talk</span></span></button>
            </div>
            <div className="hero-image">
              <img src={"hero.webp"} alt="Tyler Hirschel logo" /> 
            </div>
          </div>

    </section>
  )
}

export default Hero
