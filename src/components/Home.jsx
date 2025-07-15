import React from 'react'
import me from '../img/me_cropped2.jpg'

const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex flex-col items-center justify-center px-4'
    >
      <img
        src={me}
        alt='Picture of me'
        className='w-75 rounded-b-md mx-auto shadow'
      ></img>
      <h2 className='text-4xl font-bold mb-4'>Full-Stack Developer</h2>
      <p className='max-w-xl mx-auto text-lg'>
        I'm a developer who transitioned from custodial work to software
        development. I love clean code, strong coffee, and building things that
        make life easier.
      </p>
      <a
        href='/resume'
        className='inline-block mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition'
      >
        Download Resume
      </a>
    </section>
  )
}

export default Home
