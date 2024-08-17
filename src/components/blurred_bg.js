import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function BlurredBg({ children }) {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        //aspectRatio={2 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Silverthorne Milky Way by Nathan Anderson, via Unsplash
        src={
          "../images/astronomy1.jpg"
        }
        formats={["auto", "webp", "avif", "jpg"]}
        placeholder="blurred"
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default BlurredBg