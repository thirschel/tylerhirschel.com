import * as React from "react"
import "./icons.scss";

export const Logo = () => {

  return (
    <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.72 381.96">
        <g>
            <polyline className="t-line t-line-black" points="418.43 359.46 459.22 359.46 459.22 22.51 22.5 22.79 22.5 96.69 152.97 96.69 153.3 309.27 154.13 96.69 234.07 96.69"/>
            <polyline className="t-line t-line-white" points="418.43 359.46 459.22 359.46 459.22 22.51 22.5 22.79 22.5 96.69 152.97 96.69 153.3 309.27 154.13 96.69 234.07 96.69"/>
        </g>
        <g>
            <polyline className="h-line h-line-black" points="22.5 145.31 22.5 359.24 369.8 359.24 369.52 191.07 369.52 191.07 369.8 73.27 369.52 191.07 212.41 191.07"/>
            <polyline className="h-line h-line-white" points="22.5 145.31 22.5 359.24 369.8 359.24 369.52 191.07 369.52 191.07 369.8 73.27 369.52 191.07 212.41 191.07"/>
        </g>
    </svg>
  )
}

export const ExternalLinkIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282a36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
}

export const GithubIcon = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282a36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  )
}

export const LinkedinIcon = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282a36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}


export default Logo
