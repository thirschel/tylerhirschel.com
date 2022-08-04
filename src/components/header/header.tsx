import * as React from "react"
import ThemeToggle from "../theme-toggle/theme-toggle";
import "./header.scss";
import { Logo } from '../icons/icons';
import {jumpToAboutMeSection, jumpToProjectsSection, jumpToContactSection} from '../../scripts/page-effects';

const Header = () => {
  return (
    <header className="header container-xl">
        <div className="header-row">
            <div className="header-logo-wrapper">
              <Logo/>
            </div>
            <ul className="header-links">
              <li onClick={jumpToAboutMeSection}>About Me</li>
              <li onClick={jumpToProjectsSection}>Projects</li>
              <li onClick={jumpToContactSection}>Contact</li>
            </ul>
        </div>
    </header>
  )
}

export default Header
