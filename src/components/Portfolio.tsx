import React from 'react';
import eseteeImg from '../assets/images/portfolio/eseteecheckout.png';
import isittimeImg from '../assets/images/portfolio/isittimeyet.png';
import weatherImg from '../assets/images/portfolio/national_weather.png';
import simonImg from '../assets/images/portfolio/simon.png';
import taskappImg from '../assets/images/portfolio/taskapp.png';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Esetee Checkout',
    description:
      'A high-performance e-commerce checkout experience with real-time validation and seamless payment integration.',
    image: eseteeImg,
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe API'],
    liveUrl: 'https://example.com/esetee',
    githubUrl: 'https://github.com/example/esetee',
  },
  {
    title: 'Is It Time Yet?',
    description:
      'A playful countdown application with a unique design and interactive animations to track significant events.',
    image: isittimeImg,
    tech: ['JavaScript', 'CSS Animations', 'Vite'],
    liveUrl: 'https://example.com/isittime',
    githubUrl: 'https://github.com/example/isittime',
  },
  {
    title: 'National Weather App',
    description:
      'Comprehensive weather tracking application utilizing open-source APIs to provide accurate forecasts nationwide.',
    image: weatherImg,
    tech: ['React', 'OpenWeatherMap API', 'Tailwind'],
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/example/weather',
  },
  {
    title: 'Simon Game',
    description:
      'A digital recreation of the classic memory game Simon, focusing on timing, sound effects and responsive state management.',
    image: simonImg,
    tech: ['JavaScript', 'HTML5 Audio', 'CSS3'],
    liveUrl: 'https://example.com/simon',
    githubUrl: 'https://github.com/example/simon',
  },
  {
    title: 'Task Management App',
    description:
      'A robust productivity tool with drag-and-drop functionality, task prioritization, and local storage persistence.',
    image: taskappImg,
    tech: ['React', 'TypeScript', 'LocalStorage', 'Tailwind'],
    liveUrl: 'https://example.com/taskapp',
    githubUrl: 'https://github.com/example/taskapp',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          My{' '}
          <span
            className="text-dark-accent text-5xl md:text-7xl"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Work
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A selection of projects where I combine technical expertise with
          creative design to solve real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-dark-card rounded-3xl overflow-hidden border border-slate-800 hover:border-dark-accent transition-all duration-300 hover:-translate-y-3 shadow-xl"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white text-dark-bg rounded-full hover:bg-dark-accent transition-colors"
                  aria-label={`Live demo of ${project.title}`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white text-dark-bg rounded-full hover:bg-dark-accent transition-colors"
                  aria-label={`GitHub repo of ${project.title}`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4H10m0 0l4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
