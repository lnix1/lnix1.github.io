import * as React from 'react'
import Headshot from '../components/headshot'
import Navbar from '../components/navbar'

const IndexPage = () => {
  return (
    <body class="bg-gray-100">
        
      <section class="py-10 md:py-16">

          <div class="container max-w-screen-xl mx-auto px-4">

              <nav class="flex items-center justify-between mb-40">
                  <Navbar></Navbar>

                  <button class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</button>
              </nav>

              <div class="text-center">
                  <div class="flex justify-center mb-16">
                    <Headshot></Headshot>
                  </div>

                  <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Louis Nix II</h6>

                  <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Full Stack Developer & Data Analyst</h1>

                  <p class="font-normal text-gray-600 text-md md:text-xl mb-16">I have a passion for data and creating the tools teams need for quick access to vital data.</p>

                  <p class="font-normal text-gray-600 text-md md:text-xl mb-16">This website is under construction. Check back later when I release the updated version!</p>

                  <a href="#" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire me</a>
              </div>

          </div>

      </section>
      
    </body>
  )
}

export const Head = () => (
  <title>Louis Nix II | Portfolio</title>
)

export default IndexPage
