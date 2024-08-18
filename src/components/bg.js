import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function BackgroundSection({ children }) {
  return (
    <div class="animate-fade bg-fixed" style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        //layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        //aspectRatio={2 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Silverthorne Milky Way by Nathan Anderson, via Unsplash
        src={
          //"../images/astronomy1.jpg"
          "https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7"
        }
        formats={["auto", "webp", "avif", "jpg"]}
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

export default BackgroundSection
