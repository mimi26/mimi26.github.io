import React from 'react';
import { HiOutlineCode, HiOutlineExternalLink } from 'react-icons/hi';
import esteeImg from '../assets/images/portfolio/esteecheckout.png';
import isittimeImg from '../assets/images/portfolio/isittimeyet.png';
import weatherImg from '../assets/images/portfolio/national_weather.png';
import simonImg from '../assets/images/portfolio/simon.png';
import taskappImg from '../assets/images/portfolio/taskapp.png';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Estée Lauder Checkout',
    description:
      'A high-performance e-commerce checkout experience with real-time validation and seamless payment integration.',
    image: esteeImg,
    tech: ['React', 'TypeScript', 'MobX', 'HTML5', 'CSS3'],
    liveUrl: 'https://www.aveda.com/checkout#/delivery',
  },
  {
    title: 'Is It Time Yet?',
    description:
      'A playful countdown application with a unique design and interactive animations to track significant events.',
    image: isittimeImg,
    tech: ['JavaScript', 'HTML5', 'CSS3', 'CSS Animations'],
    liveUrl: 'https://isittimeyet.wisp.place/',
    githubUrl: 'https://tangled.org/mimi-k.bsky.social/is_it_time_yet',
  },
  {
    title: 'National Weather App',
    description:
      'Comprehensive weather tracking application utilizing open-source APIs to provide accurate forecasts nationwide.',
    image: weatherImg,
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'National Weather Service API',
      'HTML5',
      'CSS3',
    ],
    liveUrl: 'https://national-weather-mimiklein.vercel.app/',
    githubUrl: 'https://github.com/mimi26/nws_weather',
  },
  {
    title: 'Simon Game',
    description:
      'A digital recreation of the classic memory game Simon, focusing on timing, sound effects and responsive state management.',
    image: simonImg,
    tech: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://simonreact.netlify.app/',
    githubUrl: 'https://github.com/mimi26/simon-react',
  },
  {
    title: 'Task Management App',
    description:
      'A robust productivity tool with drag-and-drop functionality, task prioritization, and local storage persistence.',
    image: taskappImg,
    tech: [
      'React',
      'JavaScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'HTML5',
      'CSS3',
    ],
    githubUrl: 'https://github.com/mimi26/task-organizer',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4">
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
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-dark-bg rounded-full hover:bg-dark-accent transition-colors"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <HiOutlineExternalLink
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-dark-bg rounded-full hover:bg-dark-accent transition-colors"
                    aria-label={`GitHub repo of ${project.title}`}
                  >
                    <HiOutlineCode className="w-5 h-5" aria-hidden="true" />
                  </a>
                )}
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
