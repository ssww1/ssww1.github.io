
import React, { useState, useEffect } from 'react';
// Added Award and Zap to the import list from lucide-react to fix missing component errors
import { Menu, X, Download, Github, Mail, MapPin, ChevronRight, ExternalLink, Award, Zap } from 'lucide-react';
import { 
  PERSONAL_INFO, 
  PROJECTS, 
  EXPERIENCES, 
  ACTIVITIES, 
  SKILL_GROUPS 
} from './constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Activities', href: '#activities' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">SUN<span className="text-indigo-600">.</span></a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github size={20} />
            </a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-indigo-700 transition-all shadow-sm flex items-center gap-2">
              <Download size={14} /> Resume
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-800" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-100" />
          <div className="flex items-center gap-6 justify-center py-2">
            <a href={PERSONAL_INFO.github} className="text-slate-400 hover:text-slate-900"><Github size={24} /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-slate-900"><Mail size={24} /></a>
          </div>
        </div>
      )}
    </header>
  );
};

const Section: React.FC<{ id: string; title: string; children: React.ReactNode; className?: string }> = ({ id, title, children, className }) => (
  <section id={id} className={`py-20 max-w-5xl mx-auto px-6 ${className}`}>
    <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4">
      {title}
      <div className="h-px flex-grow bg-slate-100"></div>
    </h2>
    {children}
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/30 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase rounded-full">Available for Internship</span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-md">
                {PERSONAL_INFO.title}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2 group">
                <Download size={18} /> Download CV
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#projects" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2">
                View Projects
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-indigo-600 mb-4 p-3 bg-indigo-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <div className="flex flex-wrap gap-6 text-slate-600">
              <div className="flex items-center gap-2 font-medium">
                <MapPin size={18} className="text-indigo-500" /> {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Mail size={18} className="text-indigo-500" /> {PERSONAL_INFO.email}
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-indigo-200 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <img 
                src="https://picsum.photos/400/500" 
                alt="Sun Yixuan" 
                className="relative z-10 w-64 h-80 object-cover rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Core Projects" className="bg-slate-50/50">
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{project.period}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{project.title}</h3>
                </div>
                <div className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                  <ExternalLink size={20} />
                </div>
              </div>
              <p className="text-slate-600 font-medium mb-4 italic">Role: {project.role}</p>
              <ul className="space-y-2 mb-8">
                {project.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience">
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-100 pb-8 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 shadow-sm"></div>
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">{exp.company}</h3>
                  <div className="text-indigo-600 font-bold flex items-center gap-2 mt-1">
                    {exp.role}
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-slate-100 text-slate-500 text-sm font-bold rounded-full">{exp.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-slate-600 leading-relaxed flex gap-3">
                    <span className="text-indigo-300">▹</span> {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-slate-200 text-slate-500 text-xs font-semibold rounded-lg">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Activities Section */}
      <Section id="activities" title="Leadership & Activities" className="bg-slate-50/50">
        <div className="grid md:grid-cols-3 gap-6">
          {ACTIVITIES.map((act, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 line-clamp-1">{act.organization}</h4>
                  <p className="text-xs text-slate-500 font-semibold">{act.period}</p>
                </div>
              </div>
              <p className="text-indigo-600 font-bold text-sm mb-3">{act.role}</p>
              <ul className="space-y-2">
                {act.points.map((p, i) => (
                  <li key={i} className="text-sm text-slate-600 leading-snug">• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Zap size={18} className="text-indigo-500" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white border border-slate-100 text-slate-700 text-sm font-medium rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-100 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's connect</h2>
              <p className="text-slate-400 text-lg mb-8 max-w-md">
                Looking for internship opportunities or technical collaborations. Feel free to reach out to me via email or check my GitHub.
              </p>
              <div className="space-y-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-medium">{PERSONAL_INFO.email}</span>
                </a>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href={PERSONAL_INFO.github} target="_blank" className="p-4 bg-slate-800 rounded-2xl hover:bg-indigo-600 transition-all flex flex-col gap-2">
                  <Github size={24} />
                  <span className="font-bold">GitHub</span>
                </a>
                <button className="p-4 bg-slate-800 rounded-2xl hover:bg-indigo-600 transition-all flex flex-col gap-2 text-left">
                  <Download size={24} />
                  <span className="font-bold">Resume</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-800 flex flex-wrap justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind CSS.</p>
            <div className="flex gap-8">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#experience" className="hover:text-white">Experience</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
