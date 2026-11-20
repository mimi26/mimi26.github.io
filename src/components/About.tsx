import React from 'react';
import profileImg from '../assets/images/me.png';

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'Node.js',
  'Express',
  'HTML5',
  'CSS',
  'Tailwind',
  'PostgreSQL',
  'Responsive Design',
  'Accessibility',
];

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-12 animate-fade-in">
      <div className="flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-dark-accent via-dark-secondary to-pink-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
          <img
            src={profileImg}
            alt="Mimi Klein Profile"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-dark-bg shadow-2xl"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Hi, I'm{' '}
          <span
            className="text-dark-accent text-5xl md:text-7xl"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Mimi Klein
          </span>
        </h2>
        <p className="text-slate-400 leading-relaxed text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className="space-y-4 pt-8">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Technical Toolkit
          </h3>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-2xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center space-x-2 text-sm text-slate-300 hover:text-dark-accent transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-dark-accent shadow-[0_0_5px_rgba(244,114,182,0.8)]"></span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
