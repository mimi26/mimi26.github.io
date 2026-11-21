import React from 'react';

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
          href="https://linkedin.com/in/mimiklein"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-dark-card px-6 py-3 rounded-xl border border-slate-800 hover:border-dark-accent hover:text-white text-slate-300 transition-all duration-200 group"
          aria-label="Connect with Mimi Klein on LinkedIn"
        >
          <svg
            className="w-5 h-5 group-hover:text-dark-accent transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.448v6z" />
          </svg>
          <span className="font-medium">LinkedIn</span>
        </a>
        <a
          href="mailto:hello@mimiklein.dev"
          className="flex items-center space-x-3 bg-dark-card px-6 py-3 rounded-xl border border-slate-800 hover:border-dark-accent hover:text-white text-slate-300 transition-all duration-200 group"
          aria-label="Send an email to Mimi Klein"
        >
          <svg
            className="w-5 h-5 group-hover:text-dark-accent transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="font-medium">Email</span>
        </a>
        <a
          href="https://github.com/mimiklein"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-dark-card px-6 py-3 rounded-xl border border-slate-800 hover:border-dark-accent hover:text-white text-slate-300 transition-all duration-200 group"
          aria-label="Visit Mimi Klein's GitHub profile"
        >
          <svg
            className="w-5 h-5 group-hover:text-dark-accent transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.583 6.839 6.19 8.591.53.146.73-.344.73-.765a1.312 1.312 0 00-.333-.765C7.366 17.52 9.43 15.63 9.43 12.017C9.43 10.383 10.33 8.888 11.6 7.75c.44-.344.84-.63 1.26-.88C13.04 5.333 14.13 4.5 15.38 4.5c1.25 0 2.34.833 2.62 2.083.42.344.82.63 1.26.88c1.27 1.132 2.17 3.132 2.17 5.75c0 3.617-2.07 5.517-5.43 5.517a1.312 1.312 0 00-.333.765c-.2.42-.77.765-1.73.765-1.23 0-2.23-1.03-2.6-2.448a1.312 1.312 0 00-1.26.88c-.42.344-.82.63-1.26.88-1.27 1.132-2.17 3.132-2.17 5.75"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">GitHub</span>
        </a>
      </div>

      <div className="inline-flex flex-col items-center space-y-6 p-10 rounded-[3rem] bg-gradient-to-b from-dark-card to-slate-900 border border-slate-800 shadow-2xl animate-float">
        <div className="w-16 h-16 bg-dark-accent/20 rounded-2xl flex items-center justify-center text-dark-accent mb-2">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 6h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
        <a
          href="assets/mklein.pdf"
          download="mklein.pdf"
          className="px-8 py-3 bg-dark-accent text-dark-bg font-bold rounded-full hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg shadow-dark-accent/20"
          aria-label="Download Mimi Klein's CV in PDF format"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Contact;
