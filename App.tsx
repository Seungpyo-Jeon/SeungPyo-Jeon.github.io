import React, { useState, useEffect } from 'react';
import { cvData } from './data';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import { Mail, Github, MapPin, Download, ExternalLink, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  // Simple scroll spy to highlight nav items
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'papers'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-slate-200 selection:text-slate-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="font-bold text-lg tracking-tight cursor-pointer hover:text-slate-600"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {cvData.name}
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            {['About', 'Projects', 'Experience', 'Papers'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-slate-900 transition-colors ${activeSection === item.toLowerCase() ? 'text-slate-900' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
             <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900">
                <Github size={20} />
             </a>
             <a href={`mailto:${cvData.contact.email}`} className="text-slate-500 hover:text-slate-900">
                <Mail size={20} />
             </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        
        {/* Header / Hero */}
        <header id="about" className="mb-12">
          <div className="flex flex-row justify-between items-start gap-4 md:gap-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-1 md:mb-3 tracking-tight leading-tight">
                {cvData.name} <span className="text-xl md:text-2xl text-slate-500 font-normal md:ml-2 inline-block">{cvData.koreanName}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-4 md:mb-6 font-light leading-snug">
                {cvData.title}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-3 text-sm text-slate-500">
                <div className="flex items-center gap-2 md:whitespace-nowrap">
                  <Mail size={16} className="shrink-0" />
                  <a href={`mailto:${cvData.contact.email}`} className="hover:underline text-slate-600">{cvData.contact.email}</a>
                </div>
                <div className="flex items-center gap-y-2 gap-x-1 md:whitespace-nowrap">
                  <Github size={16} className="shrink-0" />
                  <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-600">
                    github.com/SeungPyo-Jeon
                  </a>
                </div>
                {cvData.contact.location && (
                  <div className="flex items-center gap-y-2 gap-x-1 md:whitespace-nowrap">
                    <MapPin size={16} className="shrink-0" />
                    <span>{cvData.contact.location}</span>
                  </div>
                )}
              </div>

              {/* Summary - Desktop Version (Next to image) */}
              <div className="hidden md:block prose prose-slate max-w-none text-slate-700 leading-snug mt-6">
                {cvData.summary.map((paragraph, idx) => (
                  <p key={idx} className="mb-1 whitespace-pre-line" dangerouslySetInnerHTML={{ 
                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>').replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-2 hover:text-slate-900">$1</a>'
    ); 
                  }} />
                ))}
              </div>
            </div>

            {/* Profile Image */}
            {cvData.profileImage && (
              <div className="shrink-0">
                <div className="w-28 h-36 md:w-52 md:h-72 rounded-lg overflow-hidden bg-slate-200 border border-slate-100 shadow-sm relative group">
                  <img 
                    src={cvData.profileImage} 
                    alt={cvData.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg"></div>
                </div>
              </div>
            )}
          </div>

          {/* Summary - Mobile Version (Full Width below Header/Image) */}
          <div className="md:hidden prose prose-slate max-w-none text-slate-700 leading-snug mt-6">
            {cvData.summary.map((paragraph, idx) => (
              <p key={idx} className="mb-1 whitespace-pre-line" dangerouslySetInnerHTML={{ 
                __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>').replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-2 hover:text-slate-900">$1</a>'
    );
              }} />
            ))}
          </div>
        </header>

        {/* Projects - Moved up as requested for "Recent works" visibility */}
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 gap-3">
            {cvData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>

        {/* Papers / Publications */}
        <Section id="papers" title="Publications">
          <ul className="space-y-4">
            {cvData.papers.map((paper, index) => (
              <li key={index} className="flex flex-col gap-1">
                <a href={paper.link} target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900 hover:text-blue-700 hover:underline leading-snug flex items-start gap-2">
                  <BookOpen size={20} className="shrink-0 mt-1 text-slate-400" />
                  {paper.title}
                </a>
                <p className="text-slate-600 pl-7 text-sm">
                  {paper.authors}
                </p>
                <p className="text-slate-500 pl-7 text-sm italic">
                  {paper.journal}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="space-y-8">
            {cvData.experience.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-50"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 className="font-bold text-lg text-slate-900">{exp.company}</h3>
                  <span className="text-sm font-mono text-slate-500">{exp.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                  <h4 className="text-base font-medium text-slate-700">{exp.position}</h4>
                  <span className="text-sm text-slate-500 italic">{exp.location}</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div className="space-y-6">
            {cvData.education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="font-bold text-lg text-slate-900">{edu.school}</h3>
                  <span className="text-sm font-mono text-slate-500">{edu.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <p className="text-slate-700">{edu.degree}</p>
                  <span className="text-sm text-slate-500 italic">{edu.location}</span>
                </div>
                {edu.details && (
                  <ul className="list-none text-sm text-slate-500 space-y-0.5">
                     {edu.details.map((detail, i) => (
                       <li key={i} className="flex items-center gap-2 before:content-['•'] before:text-slate-300">
                         {detail}
                       </li>
                     ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cvData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-1 text-sm uppercase">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Qualifications */}
        <Section id="qualifications" title="Qualifications">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cvData.qualifications.map((qual, index) => (
              <div key={index} className="flex justify-between items-center bg-white p-3 rounded border border-slate-100">
                <span className="font-medium text-slate-800">{qual.name}</span>
                <div className="text-sm text-slate-500 text-right">
                  {qual.score && <span className="block">{qual.score}</span>}
                  {qual.date && <span className="block text-xs">{qual.date}</span>}
                </div>
              </div>
            ))}
          </div>
        </Section>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} {cvData.name}. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
             <a href={cvData.contact.github} className="hover:text-white transition-colors">GitHub</a>
             <a href={`mailto:${cvData.contact.email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
