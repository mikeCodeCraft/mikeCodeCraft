// src/components/Projects.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import projects1 from './projects/projectbreif'; 


export const projects = [
  ...projects1,
]

const Projects = ({ preview = false }) => {
  const [filter, setFilter] = useState('all');

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredProjects = preview
    ? projects.slice(0, 3)
    : projects.filter((project) => filter === 'all' || project.categories.includes(filter));

  return (
    <section id="projects" className={preview ? 'py-20 bg-white' : ''}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!preview && (
          <>
            <section className="pt-20 pb-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
                <p className="text-xl max-w-3xl mx-auto">
                  Explore my portfolio of web development and Python projects. Each project represents unique challenges and creative solutions.
                </p>
              </div>
            </section>
            <div className="flex flex-wrap justify-center gap-3 mb-8 pt-12">
              {[
                { label: 'All Projects', value: 'all' },
                { label: 'Web Development', value: 'web' },
                { label: 'Games', value: 'game' },
                { label: 'Python', value: 'python' },
                { label: 'php', value: 'php' },
                { label: 'AI/ML', value: 'ai' },
                { label: 'Backend API', value: 'api' },
                { label: 'Desktop App', value: 'desktop' },
                { label: 'Full Stack', value: 'fullstack' },
              ].map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => handleFilter(value)}
                  className={`filter-btn px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition ${
                    filter === value ? 'filter-active' : 'text-gray-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </>
        )}
        {preview && (
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-xl overflow-hidden shadow-lg card-hover transition duration-500"
              data-category={project.categories.join(',')}
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800"
                    >
                      <i className="fas fa-external-link-alt"></i> Live
                    </a>
                  ) : (
                    <Link to={`/projects/${project.id}`} className="text-indigo-600 hover:text-indigo-800">
                      <i className="fas fa-external-link-alt"></i> Details
                    </Link>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {preview && (
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition"
            >
              View All Projects
            </Link>
          </div>
        )}
        {!preview && (
          <div className="text-center mt-12">
            <Link
              to="/"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition"
            >
              Back to Main Portfolio
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;