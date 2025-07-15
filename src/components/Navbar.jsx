import React from 'react'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-white shadow-md p-4 fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <h1 className='titlename text-4xl font-bold text-indigo-500'>
            Christopher Savasta
          </h1>

          {/* Menu Buttons */}
          <div className='hidden md:flex space-x-4'>
            <a href='#home' className='hover:text-indigo-500'>
              Home
            </a>
            <a href='#projects' className='hover:text-indigo-500'>
              Projects
            </a>
            <a href='#certifications' className='hover:text-indigo-500'>
              Certifications
            </a>
            <a href='#resume' className='hover:text-indigo-500'>
              Resume
            </a>
            <a href='#contact' className='hover:text-indigo-500'>
              Contact
            </a>
          </div>
          {/* Menu Buttons */}

          {/* Haburger */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-slate-700 hover:text-indigo-500 focus:outline-none'
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
        <div className='md:hidden px-4 pb-4 space-y-2'>
          <a
            href='#home'
            onClick={() => setIsOpen(false)}
            className='block hover:text-indigo-500'
          >
            Home
          </a>
          <a
            href='#projects'
            onClick={() => setIsOpen(false)}
            className='block hover:text-indigo-500'
          >
            Projects
          </a>
          <a
            href='#resume'
            onClick={() => setIsOpen(false)}
            className='block hover:text-indigo-500'
          >
            Resume
          </a>
          <a
            href='#contact'
            onClick={() => setIsOpen(false)}
            className='block hover:text-indigo-500'
          >
            Contact
          </a>
        </div>
      )}
      {/* Hamburger Dropdown */}
    </nav>
  )
}

export default Navbar
