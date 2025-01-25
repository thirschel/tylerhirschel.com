import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "./projects.scss";
import yankeeswapGif from "../../assets/images/yankeeswap.gif";
import yankeeswapWebm from  "../../assets/images/yankeeswap.webm";
import { ExternalLinkIcon, GithubIcon } from "../icons/icons";
declare var window: any;

const Projects = () => {

  const navigateToGithub = () =>{
    window.open('https://github.com/thirschel', '_blank').focus();
  }
  const navigateToDotNetTemplate = () =>{
    window.open('https://github.com/thirschel/dotnet-cqrs-microservice-template', '_blank').focus();
  }
  const navigateToAoc = () =>{
    window.open('https://github.com/thirschel/Advent-Of-Code', '_blank').focus();
  }
  return (
    <div className="projects container" id="projects">
        <div className="project -transition">
          <div className="project-image -box-shadow">
            <h3 className="project-title-sm">MeMetrics</h3>
            <StaticImage src="../../assets/images/memetrics.png" alt="MeMetrics website image" loading="eager" />
          </div>
          <div className="project-info">
            <h3 className="project-title">MeMetrics</h3>
            <div className="project-description">A data visualization tool built to automatically gather, analyze, and then display the data about me from various online sources in a way to either garner insights or just for a unique look into my life using data.</div>
            <ul className="project-tech">
              <li>Azure</li>
              <li>Angular</li>
              <li>Azure Functions</li>
              <li>.NET Core</li>
              <li>SQL</li>
            </ul>
            <div className="project-link">
              <a href="https://github.com/thirschel/memetrics-ui">
                <GithubIcon/>
              </a>
            </div>
          </div>
        </div>
        <div className="project -transition">
          <div className="project-image">
            <h3 className="project-title-sm">BounceMeet</h3>
            <StaticImage src="../../assets/images/bouncemeet.png" alt="MeMetrics website image" loading="eager" />
          </div>
          <div className="project-info">
            <h3 className="project-title">BounceMeet</h3>
            <div className="project-description">Bouncemeet is an application made for scheduling, specifically for sports. Bouncemeet automatically provides game archival and generation, sends alerts and emails to specific triggers, and allows users to quickly update their status without even having to log in.</div>
            <ul className="project-tech">
              <li>React</li>
              <li>Javacript</li>
              <li>MongoDb</li>
              <li>Codeship</li>
              <li>Heroku</li>
            </ul>
            <div className="project-link">
              <a href="https://github.com/thirschel/bouncemeet">
                <GithubIcon/>
              </a>
            </div>
          </div>
        </div>
        <div className="project -transition">
          <div className="project-image -box-shadow">
            <h3 className="project-title-sm">YankeeSwap</h3>
            <video autoPlay loop>
              <source src={yankeeswapWebm} type="video/webm" />
            </video>
          </div>
          <div className="project-info">
            <h3 className="project-title">YankeeSwap</h3>
            <div className="project-description">YankeeSwap is an application created during the height of COVID-19 to allow friends and family to have a virtual gift exchange. It is a gift exchange where the recipient of the gift is unknown. Every player, will purchase a gift to submit and then wrap that gift.</div>
            <ul className="project-tech">
              <li>Angular</li>
              <li>Firebase</li>
              <li>Node.JS</li>
              <li>WebSockets</li>
            </ul>
            <div className="project-link">
              <a href="https://github.com/thirschel/yankee-swap">
                <GithubIcon/>
              </a>
            </div>
          </div>
        </div>
        <div className="other-repos -transition">
          <div className="project-card help-card -transition">
              <div className="help-text">
                <h2>Find more projects on my Github</h2>
                <button onClick={navigateToGithub} className="btn project-btn">VIEW GITHUB</button>
              </div>
          </div>
          <div className="project-card -transition" onClick={navigateToAoc} >
            <h3 className="project-title">Advent of Code</h3>
            <p className="project-description">Advent of Code is a series of small programming puzzles for a variety of skill levels</p>
            <ul className="project-tech">
              <li className="project-tech-badge">Typescript</li>
            </ul>
            <div className="project-image">
              <StaticImage src="../../assets/images/aoc.png" alt="Advent of Code tree" loading="eager" />
            </div>
          </div>
          <div className="project-card -transition" onClick={navigateToDotNetTemplate} >
            <h3 className="project-title">.NET CQRS Microservice Template</h3>
            <p className="project-description">A .NET template to quickly scaffold new microservice apis using clean architecture</p>
            <ul className="project-tech">
              <li className="project-tech-badge">.NET Core</li>
            </ul>
          </div>

        </div>
       
    </div>
  )
}

export default Projects
