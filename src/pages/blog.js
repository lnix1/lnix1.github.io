import * as React from 'react'
import Navbar from '../components/navbar'

const BlogPage = () => {
  return (

      <body className="font-frankRuhle">

        <section class="py-4 md:py-16 bg-fixed bg-contain bg-parallax bg-center">

            <div class="container min-h-screen mx-auto px-4">

                <Navbar />
                <section class="">

                    <div class="container mx-auto px-4">

                        <h1 class="flex justify-center text-gray-200 text-3xl md:text-4xl mb-5">Writing</h1>

                        <p class="flex justify-center text-gray-200 text-xs md:text-base mb-20">Below are articles, analyses, and blog posts i've written. <br />Please peruse and reach out if you have questions <br />about any particular one!</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="px-8 py-10 rounded-md opacity-75 hover:opacity-100">
                                <h4 class="text-gray-200 text-lg mb-4">Placeholder for Article Name</h4>

                                <p class="text-gray-300 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>

                            </div>

                            <div class="px-8 py-10 rounded-md opacity-75 hover:opacity-100">
                                <h4 class="text-gray-200 text-lg mb-4">Placeholder for Article Name</h4>

                                <p class="text-gray-300 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </section>

    </body>

  )
}

export const Head = () => (
  <title>Louis Nix II | Portfolio</title>
)

export default BlogPage
