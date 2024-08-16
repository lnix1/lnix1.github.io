import * as React from 'react'
import Headshot from '../components/headshot'
import Navbar from '../components/navbar'
import BackgroundSection from '../components/bg'

const IndexPage = () => {
  return (
    <BackgroundSection>

      <body>

        <section class="py-10 md:py-16">

            <div class="container min-h-screen mx-auto px-4">

                <nav class="flex items-center justify-between mb-40">
                    <Navbar></Navbar>

                    <button class="px-7 py-3 md:px-9 md:py-4 bg-gray-500 font-medium md:font-semibold text-gray-50 text-md rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Get my CV</button>
                </nav>

                <div class="text-center">
                    <div class="flex justify-center mb-16">
                      <Headshot></Headshot>
                    </div>

                    <div class="rounded-md">

                      <h1 class="font-normal text-gray-300 text-lg md:text-5xl uppercase mb-8 opacity-100">Louis Nix II</h1>

                      <h1 class="font-normal text-gray-300 text-4xl md:text-6xl leading-none mb-8">Full Stack Developer & Data Analyst</h1>

                      <p class="font-normal text-gray-300 text-md md:text-xl mb-16">I have a passion for data and creating the tools teams need for quick access to vital data.</p>

                      <a href="#" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-500 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire me</a>

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
