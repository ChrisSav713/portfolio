import React from 'react'

const projectList = [
  {
    title: 'Project Manager',
    description:
      'A full-featured task management app that supports creating and editing projects, adding tasks with priority and due dates, and filtering tasks by project. Includes form validation, contextual task editing, and data persistence with Firebase.',
    link: 'https://project-managerchrissav713.netlify.app/',
    repo: 'https://github.com/ChrisSav713/project-manager.git',
    highlights: [
      'React',
      'TypeScript',
      'Firebase Firestore',
      'Tailwind CSS',
      'Vite'
    ]
  },
  {
    title: 'Movie Explorer',
    description:
      'A movie discovery app that fetches trending films and detailed metadata from the TMDB API. Features include dynamic search, detail pages with full movie information, responsive UI, and clean navigation using React Router. Data is displayed with images, ratings, release dates, and more.',
    link: 'https://chrissav713movieexplorer.netlify.app',
    repo: 'https://github.com/ChrisSav713/MovieExplorer.git',
    highlights: [
      'React',
      'JavaScript',
      'TMDB API',
      'Tailwind CSS',
      'React Router'
    ]
  },
  {
    title: 'Reading List',
    description:
      'A backend-focused web app that lets users log and track books they’ve read, add new entries with forms, edit details, and delete records. Built with server-side rendering using Flask and Jinja. Supports full CRUD operations with form validation and database persistence.',
    link: 'https://reading-list-fqzs.onrender.com', // update if needed
    repo: 'https://github.com/ChrisSav713/reading-list.git',
    highlights: ['Python', 'Flask', 'Jinja', 'PostgreSQL', 'Postman']
  }
]

const Projects = () => {
  return (
    <section id='projects' className='p-8 pb-50 bg-slate-100'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Projects</h2>
      <div className='flex flex-col gap-6 w-full max-w-3xl mx-auto'>
        {projectList.map((project, index) => (
          <div
            key={index}
            className='bg-white p-6 rounded-lg shadow flex flex-col md:flex-row md:justify-between md:items-start gap-6'
          >
            {/* Left: Project Info */}
            <div className='flex-1'>
              <h3 className='text-xl font-semibold text-indigo-600'>
                {project.title}
              </h3>
              <p className='mt-2 text-slate-700'>{project.description}</p>
              <div className='flex flex-col gap-2 mt-4'>
                <a
                  href={project.link}
                  className='text-indigo-500 hover:underline'
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

            {/* Right: Highlights */}
            {project.highlights && (
              <div className='md:w-1/3'>
                <ul className='list-disc list-inside text-slate-600 text-md'>
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='flex-wrap flex flex-row p-5 m-5 gap-5'>
        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
        />

        <img
          width='60px'
          src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
        />
      </div>
    </section>
  )
}

export default Projects
