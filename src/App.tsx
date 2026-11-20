import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-16">
        <Section id="about">
          <About />
        </Section>
        <Section id="portfolio">
          <Portfolio />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <ScrollToTop />
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} Mimi Klein. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
