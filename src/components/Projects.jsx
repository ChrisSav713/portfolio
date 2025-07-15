import React from 'react'

const projectList = [
  {
    title: 'Movie Explorer',
    description: 'React + TMDB API project',
    link: '#'
  },
  {
    title: 'Udemy Project 2',
    description: 'Full-Stack Bootcamp milestone',
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen p-8 bg-slate-100'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Projects</h2>
      <div className='grid gap-6 md:grid-cols-2'>
        {projectList.map((project, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-xl font-semibold text-indigo-600'>
              {project.title}
            </h3>
            <p className='mt-2 text-slate-700'>{project.description}</p>
            <a
              href={project.link}
              className='text-indigo-500 mt-4 inline-block hover:underline'
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
