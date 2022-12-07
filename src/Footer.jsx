import React from 'react'
import {Link} from "react-router-dom";
import logo from "./assets/pw_data/logo_GMN.png";

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
            <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
              <Link to="/"><img src={logo} alt="/" className="w-25 h-20"/></Link>
            </a>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     className="w-5 h-5 mr-2 sm:mr-6">
                  <path fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     className="w-5 h-5 mr-2 sm:mr-6">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <div className="space-y-3">
          </div>
          <div className="space-y-3">
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">Regulamin</h1>
            <p className="pt-2 pb-4">Pobierz</p>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">© 1968 Company Co. All rights reserved.</div>
    </footer>
  )
}

export default Footer
