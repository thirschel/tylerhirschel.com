import * as React from "react"
import ThemeToggle from "../theme-toggle/theme-toggle";
import { DarkModeContext } from "../../pages/index";
import "./header.scss";
import { Logo } from '../icons/icons';
import {jumpToAboutMeSection, jumpToProjectsSection, jumpToContactSection} from '../../scripts/page-effects';

const Header = () => {
  const context:any = React.useContext(DarkModeContext);

  return (
    <header className="header container-xl">
      <ThemeToggle checked={context.useDarkMode}
        size={40}></ThemeToggle>
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
