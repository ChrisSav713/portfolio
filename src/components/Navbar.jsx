import React from 'react'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg p-4 fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-extrabold text-white tracking-wide'>
            Christopher Savasta
          </h1>

          {/* Menu Buttons */}
          <div className='hidden md:flex space-x-6'>
            {['Home', 'Projects', 'Certifications', 'Resume', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='text-white hover:text-yellow-200 transition duration-300 ease-in-out font-medium'
                >
                  {item}
                </a>
              )
            )}
          </div>
          {/* Menu Buttons */}

          {/* Hamburger */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white hover:text-yellow-200 focus:outline-none'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Hamburger */}
        </div>
      </div>

      {/* Hamburger Dropdown */}
      {isOpen && (
        <div className='md:hidden px-4 pb-4 pt-2 space-y-2 bg-white bg-opacity-10 backdrop-blur rounded-b-lg text-white'>
          {['Home', 'Projects', 'Certifications', 'Resume', 'Contact'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className='block hover:text-yellow-200 transition duration-300'
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
      {/* Hamburger Dropdown */}
    </nav>
  )
}

export default Navbar
