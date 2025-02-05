import React from 'react';
import { PROJECTS } from '../constants';

function Project() {
  return (
    <>
      <div>
      <h1 className='mt-16 mb-5'>Project</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {
          PROJECTS.map((project, index) => {
            return (
              <div>
              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                <a key={index} href={project.link}  target="_blank"
            rel="noopener noreferrer">
                  <img className="rounded-lg" src={project.image} alt={project.title} />
                </a>
             
                </div>
                <div className="mt-4 ml-1">
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <h5 className="mb-2  text-sm tracking-tight text-gray-900 ">
                      {project.title}
                    </h5>
                    <h6 className='text-gray-500 text-sm font-light'>{project.description}</h6>
                  </a>
                 
                  </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Project;
