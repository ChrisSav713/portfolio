import React from 'react'

const Certifications = () => {
  return (
    <section
      id='certifications'
      className='min-h-screen p-8 bg-white text-center'
    >
      <h2 className='text-3xl font-bold mb-6'>Certifications</h2>

      <div className='space-y-4'>
        <div>
          <h3 className='text-xl font-semibold'>
            Coding Dojo Full-Stack Bootcamp
          </h3>
          <a
            href='https://example.com/coding-dojo-diploma.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='text-indigo-500 hover:underline'
          >
            View Diploma
          </a>
        </div>

        <div>
          <h3 className='text-xl font-semibold mt-6'>Udemy Certificates</h3>
          <ul className='space-y-2 mt-2'>
            <li>
              <a
                href='https://www.udemy.com/certificate/123456789/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:underline'
              >
                React – The Complete Guide
              </a>
            </li>
            <li>
              <a
                href='https://www.udemy.com/certificate/987654321/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:underline'
              >
                100 Days of Code: Python Pro Bootcamp
              </a>
            </li>
            <li>
              <a
                href='https://www.udemy.com/certificate/1122334455/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:underline'
              >
                Full-Stack Web Development Bootcamp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Certifications
