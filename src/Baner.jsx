import React from 'react'
import baner from './assets/pw_data/baner_home.jpg'

const Baner = () => {
  return (
  <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 ">
    <div className="container mx-auto space-y-5 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col overflow-hidden lg:flex-row">
        <img src={baner} alt="" className="h-72 object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">Gala Młodych Naukowców
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
          </p>
          <div
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#"
               className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
            <a rel="noopener noreferrer" href="#"
               className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

export default Baner
