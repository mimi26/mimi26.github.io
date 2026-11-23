import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineMail } from 'react-icons/hi';
import CV from '../assets/mimiklein.pdf';
import CVimage from '../assets/images/CV.png';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center animate-fade-in space-y-12">
      <div>
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 leading-tight">
          Get In{' '}
          <span
            className="text-dark-accent text-5xl md:text-7xl"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Touch
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat about software engineering.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/mimi-klein/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-dark-card px-6 py-3 rounded-xl border border-slate-800 hover:border-dark-accent hover:text-white text-slate-300 transition-all duration-200 group"
          aria-label="Connect with Mimi Klein on LinkedIn"
        >
          <FaLinkedinIn
            className="w-5 h-5 group-hover:text-dark-accent transition-colors"
            aria-hidden="true"
          />
          <span className="font-medium">LinkedIn</span>
        </a>
        <a
          href="mailto:mimiklein@proton.me"
          className="flex items-center space-x-3 bg-dark-card px-6 py-3 rounded-xl border border-slate-800 hover:border-dark-accent hover:text-white text-slate-300 transition-all duration-200 group"
          aria-label="Send an email to Mimi Klein"
        >
          <HiOutlineMail
            className="w-5 h-5 group-hover:text-dark-accent transition-colors"
            aria-hidden="true"
          />
          <span className="font-medium">Email</span>
        </a>
        <a
          href="https://github.com/mimi26"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-dark-card px-6 py-3 rounded-xl border border-slate-800 hover:border-dark-accent hover:text-white text-slate-300 transition-all duration-200 group"
          aria-label="Visit Mimi Klein's GitHub profile"
        >
          <FaGithub
            className="w-5 h-5 group-hover:text-dark-accent transition-colors"
            aria-hidden="true"
          />
          <span className="font-medium">GitHub</span>
        </a>
      </div>

      <div className="inline-flex flex-col items-center space-y-6 p-10 rounded-[3rem] bg-gradient-to-b from-dark-card to-slate-900 border border-slate-800 shadow-2xl">
        <a
          href={CV}
          download="test.pdf"
          className="px-8 py-3 space-y-6 flex flex-col items-center"
          aria-label="Download Mimi Klein's CV in PDF format"
        >
          <div className="px-8 py-3 bg-dark-accent text-dark-bg font-bold rounded-full hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg shadow-dark-accent/20 flex items-center">
            Download CV
            <HiOutlineDocumentText className="w-8 h-8" aria-hidden="true" />
          </div>
          <img src={CVimage} alt="Mimi Klein's CV" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
