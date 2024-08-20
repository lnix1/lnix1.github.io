import * as React from 'react'
import Navbar from '../components/navbar'

const ProjectsPage = () => {
    return (

        <body className="font-frankRuhle bg-fixed bg-contain bg-parallax bg-center">

            <section class="md:py-16">

                <div class="container min-h-screen mx-auto px-20">

                    <Navbar />

                    <div class="flex flex-col lg:flex-row justify-between px-16">
                        <div class="mb-10 lg:mb-0">
                            <h1 class="font-medium text-gray-200 text-3xl md:text-4xl mb-5">Portfolio</h1>

                        </div>

                        <div class="space-y-24">
                            <a class="flex space-x-6 opacity-75 hover:opacity-100" href="/">

                                <span class="w-28 h-0.5 bg-gray-200 mt-5"></span>

                                <div>
                                    <h1 class="font-normal text-gray-200 text-3xl md:text-4xl mb-5">Zip Radius Tool</h1>

                                    <p class="font-normal text-gray-200 text-sm md:text-base">A tool for generating a csv file of all zip codes within <br />a given radius of a each code in a list of zips.</p>
                                </div>
                            </a>
                
                            <a class="flex space-x-6 opacity-75 hover:opacity-100" href="/">

                                <span class="w-28 h-0.5 bg-gray-200 mt-5"></span>

                                <div>
                                <h1 class="font-normal text-gray-200 text-3xl md:text-4xl mb-5">Bayesian Alternative to <br />PISA Scoring Model</h1>

                                    <p class="font-normal text-gray-200 text-sm md:text-base">A paper and code on developing a a Bayesian alternative <br />to the current frequentist scoring model for PISA tests, <br />which are used to evaluate relative performance of studuents <br />in countries around the world</p>
                                </div>
                            </a>
                
                            <a class="flex space-x-6 opacity-75 hover:opacity-100" href="/">

                                <span class="w-28 h-0.5 bg-gray-200 mt-5"></span>

                                <div>
                                    <h1 class="font-normal text-gray-200 text-3xl md:text-4xl mb-5">Macroeconomic Data <br />Aggregator</h1>

                                    <p class="font-normal text-gray-200 text-sm md:text-base">A website which collates data from the Fed, BLS, and other <br />governmental sources in a single, easy to access interface. <br />No more hunting to keep up with data releases, find all the <br />data on the economy you, stored and visualized here!</p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </body>
    )
}

export const Head = () => (
  <title>Louis Nix II | Portfolio</title>
)

export default ProjectsPage
