import * as React from 'react'
import Headshot from '../components/headshot'
import Navbar from '../components/navbar'
import BackgroundSection from '../components/bg'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <BackgroundSection>

      <body className="font-frankRuhle">

        <section class="py-10 md:py-16">

            <div class="container min-h-screen mx-auto px-4">

                <Navbar />

                <div class="text-center">
                    <div class="flex justify-center mb-16">
                      <Headshot />
                    </div>

                    <div class="rounded-lg">

                      <h1 class="text-gray-200 text-lg md:text-6xl mb-8 opacity-100">Louis Nix II</h1>

                      <h1 class="text-gray-200 text-4xl md:text-4xl leading-none mb-8">Full Stack Developer & Data Analyst</h1>

                    </div>

                </div>

                <div class="text-center py-10">

                    <div class="grid grid-cols-3 gap-4 justify-items-center">
                      <div class="flex items-center">
                        <a href="/" class="invert">
                          <StaticImage
                            //Credits to Freepik, via flaticon.com
                            src="../images/resume_2.png"
                            alt=""
                            layout="fixed"
                            height={60}
                            width={60}
                          />
                        </a>
                      </div>
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

                    <div class="grid grid-cols-3 gap-4 justify-items-center">
                      <div>
                        <h1 class="text-gray-200 md:text-2xl">Experience</h1>
                      </div>
                      <div>
                        <h1 class="text-gray-200 md:text-2xl">Projects</h1>
                      </div>
                      <div>
                        <h1 class="text-gray-200 md:text-2xl">Blog</h1>
                      </div>
                    </div>
                </div>

                <div class="text-center py-10">


                    <div class="rounded-lg">

                      <a href="/" class="px-7 py-3 md:px-9 md:py-4 md:font-semibold bg-gray-500 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Contact me</a>

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
