import * as React from 'react'
import Navbar from '../components/navbar'

const ProjectsPage = () => {
    return (

        <body className="font-frankRuhle bg-fixed bg-contain bg-parallax bg-center">

            <section class="py-10 md:py-16">

                <div class="container min-h-screen mx-auto px-20">

                    <div class="flex flex-col lg:flex-row justify-between">
                        <div class="mb-10 lg:mb-0">
                            <h1 class="font-medium text-gray-200 text-3xl md:text-4xl mb-5">Portfolio</h1>

                        </div>

                        <div class="space-y-24">
                            <div class="flex space-x-6">
                                <h1 class="font-normal text-gray-200 text-3xl md:text-4xl">01</h1>

                                <span class="w-28 h-0.5 bg-gray-200 mt-5"></span>

                                <div>
                                    <h1 class="font-normal text-gray-200 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                                    <p class="font-normal text-gray-200 text-sm md:text-base">A dummy data free and documented API generator to facilitate</p>
                                </div>
                            </div>
                
                            <div class="flex space-x-6">
                                <h1 class="font-normal text-gray-200 text-3xl md:text-4xl">02</h1>

                                <span class="w-28 h-0.5 bg-gray-200 mt-5"></span>

                                <div>
                                    <h1 class="font-normal text-gray-200 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                                    <p class="font-normal text-gray-200 text-sm md:text-base">A dummy data free and documented API generator to facilitate</p>
                                </div>
                            </div>
                
                            <div class="flex space-x-6">
                                <h1 class="font-normal text-gray-200 text-3xl md:text-4xl">03</h1>

                                <span class="w-28 h-0.5 bg-gray-200 mt-5"></span>

                                <div>
                                    <h1 class="font-normal text-gray-200 text-3xl md:text-4xl mb-5">Demo API Generator</h1>

                                    <p class="font-normal text-gray-200 text-sm md:text-base">A dummy data free and documented API generator to facilitate</p>
                                </div>
                            </div>
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
