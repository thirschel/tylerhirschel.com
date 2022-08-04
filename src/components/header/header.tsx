import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import ThemeToggle from "../theme-toggle/theme-toggle";
import { DarkModeContext } from "../../pages/index";
import "./header.scss";
import Logo from '../logo/logo';

const Header = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [toggleAmount, setToggleAmount] = React.useState(0);
  const context:any = React.useContext(DarkModeContext);

  return (
    <header className="header container-xl">
      <ThemeToggle checked={context.useDarkMode}
        size={40}></ThemeToggle>
        <div className="row header-row">
            <div className="header-logo-wrapper">
              <Logo/>
            </div>
            <ul className="header-links">
              <li>About Me</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
        </div>
    </header>
  )
}

export default Header
