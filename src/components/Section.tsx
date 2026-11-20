import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="min-h-screen section-padding flex flex-col justify-center"
    >
      {children}
    </section>
  );
};

export default Section;
