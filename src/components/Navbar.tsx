import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="text-3xl font-medium text-dark-accent tracking-wide hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Mimi Klein
        </a>
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-dark-accent transition-colors duration-200 text-sm font-medium"
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
