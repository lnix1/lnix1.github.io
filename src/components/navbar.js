import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import MyPDF from '../images/Resume_Nix_L.pdf'; 

export function Navbar() {
  return (
    <nav class="flex items-center gap-10 justify-center mb-20">
        <a class="invert" href="/">
            <StaticImage
              src="../images/home.png"
              alt="Navbar Image"
              placeholder="blurred"
              layout="fixed"
              height={40}
              width={40}
            />
        </a>
        <a href="https://github.com/lnix1">
          <StaticImage
            src="../images/github-mark-white.png"
            alt=""
            layout="fixed"
            height={40}
            width={40}
          />
        </a>
        <a href="https://www.linkedin.com/in/louisnixii/">
          <StaticImage
            src="../images/In-White-72.png"
            alt=""
            layout="fixed"
            height={40}
            width={40}
          />
        </a>
        <a class="invert" href={MyPDF} download="Resume_Nix_L.pdf">
          <StaticImage
            //Credit to spaceman.design, via flaticon.com
            src="../images/resume.png"
            alt=""
            layout="fixed"
            height={40}
            width={40}
          />
        </a>
    </nav>
  )
}

export default Navbar