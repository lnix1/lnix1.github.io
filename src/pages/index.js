import * as React from 'react'
import Headshot from '../components/headshot'
import Navbar from '../components/navbar'
import BackgroundSection from '../components/bg'
import BlurredBg from '../components/blurred_bg'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <BackgroundSection>

      <body className="font-frankRuhle">

        <section class="py-10 md:py-16">

            <div class="container min-h-screen mx-auto px-4">

                <nav class="flex items-center justify-between mb-40">
                    <Navbar />
                    <a href="https://github.com/lnix1">
                      <StaticImage
                        src="../images/github-mark-white.png"
                        alt=""
                        layout="fixed"
                        height={60}
                        width={60}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/louisnixii/">
                      <StaticImage
                        src="../images/In-White-72.png"
                        alt=""
                        layout="fixed"
                        height={60}
                        width={60}
                      />
                    </a>
                    <button class="px-7 py-3 md:px-9 md:py-4 bg-gray-500 font-medium md:font-semibold text-gray-50 text-md rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">CV</button>
                </nav>

                <div class="text-center">
                    <div class="flex justify-center mb-16">
                      <Headshot />
                    </div>

                    <div class="rounded-lg">

                      <h1 class="font-normal text-gray-300 text-lg md:text-5xl uppercase mb-8 opacity-100">Louis Nix II</h1>

                      <h1 class="font-normal text-gray-300 text-4xl md:text-6xl leading-none mb-8">Full Stack Developer & Data Analyst</h1>

                    </div>

                </div>

                <div class="text-center">

                    <div class="grid grid-cols-3 gap-4 justify-items-center mb-16 p-10">

                      <a href="/" class="invert">
                        <StaticImage
                          //Credits to spaceman.design, via flaticon.com
                          src="../images/resume.png"
                          alt=""
                          layout="fixed"
                          height={60}
                          width={60}
                        />
                      </a>
                      <a href="/" class="invert">
                        <StaticImage
                          //Credits to Freepik, via flaticon.com
                          src="../images/project.png"
                          alt=""
                          layout="fixed"
                          height={60}
                          width={60}
                        />
                      </a>
                      <a href="/" class="invert">
                        <StaticImage
                          //Credits to BomSymbols, via flaticon.com
                          src="../images/blogger.png"
                          alt=""
                          layout="fixed"
                          height={60}
                          width={60}
                        />
                      </a>
                    </div>

                </div>

                <div class="text-center">


                    <div class="rounded-lg">

                      <a href="/" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-500 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Contact me</a>

                    </div>

                </div>
            </div>

        </section>

    </body>

  </BackgroundSection>
  )
}

export const Head = () => (
  <title>Louis Nix II | Portfolio</title>
)

export default IndexPage
