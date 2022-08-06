import * as React from "react"
import "./about-me.scss";

const AboutMe = () => {
  const [toggleAmount, setToggleAmount] = React.useState(0);

  return (
    <section className="about-me -transition" id="aboutMe">
      <div className="container">
        <h3 className="about-header -animation-item">A little about me</h3>
        <p className="about-text -animation-item">
          I am a software engineer who enjoys taking on challenging problems that present themselves in the rapidly and ever growing field of software. I strive to produce the best experience, from the requirements to delivery and beyond, and create unique, intuitive, and well designed interfaces and user experiences for desktop, web, and mobile applications. I currently reside in the wonderful city of Chicago, which also happens to house the best sports teams: the Bears, Bulls, and Blackhawks.
        </p>
        <p className="about-text -animation-item">
          In the 10+ years I've been working to create software, I've been resposible for leading teams, architecting long term solutions, and scaling and modernizing existing solutions for many different industries all with unique problem sets. 
          I've come up with solutions for the grocery industry to be able to budget all of their promotions across all of their stores. 
          I've hired and led teams to build FinTech SaaS solutions to allow banks and financial institutions to be able to report their products and activity to the SEC. 
          I have created responsive applications, to allow back office staff using desktops as well as the workers on the ground using mobile devices, to be able to track product throughout its journey for the trucking industry. I've scaled cloud agnostic environments to be able to increase their performance of their Sales Enablement platform 600 fold.
        </p>
        <p className="about-text -animation-item">
          I am constantly looking for the next thing to learn or skill to master. I've been lucky to be able to have so many opportunities to be challenged by and to ultimately learn from.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
