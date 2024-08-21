import * as React from 'react'
import Headshot from '../components/headshot'
import Navbar from '../components/navbar'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (

      <body className="font-frankRuhle">

        <section class="py-4 md:py-16 bg-fixed bg-contain bg-parallax bg-center">

            <div class="container min-h-screen mx-auto px-4">

                <Navbar />

                <div class="text-center">
                    <div class="flex justify-center mb-16">
                      <Headshot />
                    </div>

                    <div class="rounded-lg">

                      <h1 class="text-gray-200 text-lg md:text-6xl mb-8 opacity-100">Louis Nix II</h1>

                      <h1 class="text-gray-200 text-4xl md:text-4xl leading-none mb-8">Data Engineer & Data Analyst</h1>

                      <p class="text-gray-300 text-md md:text-md leading-none mb-8">I specialize in data, filling the gap between <br />engineering and non-technical stakeholders.</p>

                    </div>

                </div>

                <div class="text-center py-10">
                    <div class="flex items-center gap-10 justify-center">
                    {/*
                      <div class="grid-cols-1">
                        <a href="/" class="invert">
                          <StaticImage
                            //Credits to Freepik, via flaticon.com
                            src="../images/resume_2.png"
                            alt=""
                            height={60}
                            width={60}
                          />
                        </a>
                        <h1 class="text-gray-200 md:text-2xl">Experience</h1>
                      </div>
                      */}
                      <div class="grid-cols-1">
                        <a href="/portfolio" class="invert">
                          <StaticImage
                            //Credits to Freepik, via flaticon.com
                            src="../images/project.png"
                            alt=""
                            height={60}
                            width={60}
                          />
                        </a>
                        <h1 class="text-gray-200 md:text-2xl">Portfolio</h1>
                      </div>
                      <div class="grid-cols-1">
                        <a href="/blog" class="invert">
                          <StaticImage
                            //Credits to afitrose, via flaticon.com
                            src="../images/blogger.png"
                            alt=""
                            height={60}
                            width={60}
                          />
                        </a>
                        <h1 class="text-gray-200 md:text-2xl">Blog</h1>
                      </div>
                    </div>

                </div>
                {/*
                <div class="text-center py-10">


                    <div class="rounded-lg">

                      <a href="/" class="px-7 py-3 md:px-9 md:py-4 md:font-semibold bg-gray-500 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Contact me</a>

                    </div>

                </div>
                */}

            </div>

        </section>

    </body>

  )
}

export const Head = () => (
  <title>Louis Nix II | Portfolio</title>
)

export default IndexPage
