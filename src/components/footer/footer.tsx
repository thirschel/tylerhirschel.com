import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import { LinkedinIcon, GithubIcon } from "../icons/icons";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(217,217,217,1)" />
          </g>
        </svg>
      </div>
      <div className="footer-content">
        <div className="container">
          <h1 className="footer-title">Let's talk</h1>
          <p className="footer-text">Got a project or opportunity in mind? My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          <a className="email" href="mailto:tyler.p.hirschel@gmail.com">tyler.p.hirschel@gmail.com</a>
          <div className="footer-links">
            <a href="https://github.com/thirschel">
              <GithubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/tylerhirschel/">
              <LinkedinIcon/>
            </a>
          </div>
          <a className="source-code" href="https://github.com/thirschel/tylerhirschel.com"><div className="footer-source">Looking for the source code?</div></a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
