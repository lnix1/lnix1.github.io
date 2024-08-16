import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function Headshot() {
  return (
    <StaticImage
      src="../images/headshot.png"
      alt="Personal Headshot"
      placeholder="blurred"
      layout="fixed"
      height={200}
      width={200}
      class="rounded-full"
    />
  )
}

export default Headshot
