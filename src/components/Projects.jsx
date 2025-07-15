import React from 'react'

const projectList = [
  {
    title: 'Movie Explorer',
    description:
      'A dynamic web application that leverages the TMDB API to let users explore trending movies and TV shows, search for specific titles, and view detailed information including ratings, release dates, and summaries. Built with React and styled using Tailwind CSS, the app provides a responsive and modern user experience.',
    link: 'https://chrissav713movieexplorer.netlify.app/',
    repo: 'https://github.com/ChrisSav713/reading-list.git'
  },
  {
    title: 'Reading List',
    description: `A web app that allows users to create and manage a personalized reading list, tracking books they want to read or have already completed. The site integrates with the Google Books API to easily search for and add books with rich metadata. Built with Python using the Flask framework, and backed by a PostgreSQL database for storing custom reading status and book data.`,
    link: 'https://reading-listchrissav713.netlify.app/',
    repo: 'https://github.com/ChrisSav713/MovieExplorer.git'
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
            <div className='flex flex-col gap-2'>
              <a
                href={project.link}
                className='text-indigo-500 pt-3 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                🌐 View Project
              </a>
              <a
                href={project.repo}
                className='text-indigo-500 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                📁 GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
