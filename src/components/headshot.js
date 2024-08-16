import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function Headshot() {
  return (
    <StaticImage
      src="../images/headshot.png"
      alt="Personal Headshot"
      layout="fixed"
      height={250}
      width={250}
      class="rounded-full"
    />
  )
}

export default Headshot
