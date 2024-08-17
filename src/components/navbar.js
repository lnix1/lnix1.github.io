import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function Navbar() {
  return (
    <a href="/">
      <div class="invert">
        <StaticImage
          src="../images/home.png"
          alt="Navbar Image"
          placeholder="blurred"
          layout="fixed"
          height={60}
          width={60}
        />
      </div>
    </a>
  )
}

export default Navbar