import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function Navbar() {
  return (
    <StaticImage
      src="../images/navbar-logo.png"
      alt="Navbar Image"
      placeholder="blurred"
      layout="fixed"
      height={40}
      width={60}
    />
  )
}

export default Navbar