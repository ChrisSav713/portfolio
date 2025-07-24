import React from 'react'
import me from '../img/me_cropped2.jpg'

const Home = () => {
  return (
    <section
      id='home'
      className='flex flex-col items-center justify-center px-4 pb-40'
    >
      <h2 className='text-4xl font-bold mb-4'>About Me</h2>
      <p className='max-w-xl mx-auto text-lg'>
        I'm a career-changer with a background in custodial work and a strong
        foundation in Computer Science. After a decade of hands-on, reliable
        work, I reignited my passion for technology and completed a full-stack
        coding bootcamp. I'm now focused on building clean, maintainable
        applications using modern tools like React, JavaScript, and Python. I
        thrive on learning by doing—whether it's developing full-stack projects,
        exploring new frameworks, or solving real-world problems through code.
      </p>
    </section>
  )
}

export default Home
