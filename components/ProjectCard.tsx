import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group mb-4 bg-white p-6 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 pr-2"> {/* 링크 버튼 공간 확보를 위해 pr-4 추가 */}
          <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">
            {project.title}
          </h3>
          {project.period && (
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
              {project.period}
            </p>
          )}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-2 items-end sm:items-center"> 
            {project.links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="
                  inline-flex items-center gap-1.5 px-3 py-1.5 
                  text-xs font-medium text-slate-600 bg-slate-50 
                  border border-slate-200 rounded-md 
                  hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 
                  transition-all
                "
              >
                {/* URL에 github가 포함되어 있으면 GitHub 아이콘, 아니면 외부 링크 아이콘 */}
                {link.url.toLowerCase().includes('github') ? <Github size={14} /> : <ExternalLink size={14} />}
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <p className="text-slate-600 mb-5 text-sm leading-7">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-full border border-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.imageUrl && (
        <div className="mt-4 rounded-md overflow-hidden border border-slate-100">
          <img 
            src={project.imageUrl} 
            alt={`${project.title} screenshot`} 
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;