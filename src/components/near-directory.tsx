import React, { useState } from 'react';
import { projects, Project } from '../lib/data';
import { motion } from 'framer-motion';

const groupProjectsByCategory = (projects: Project[]) => {
  const categories = Array.from(new Set(projects.map(project => project.category)));
  return categories.map(categoryName => ({
    name: categoryName,
    projects: projects.filter(project => project.category === categoryName)
  }));
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
  >
    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
    <a
      href={`https://x.com/${project.twitter}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
    >
      @{project.twitter}
    </a>
  </motion.div>
);

interface SimpleCategory {
  name: string;
  projects: Project[];
}

const CategorySection: React.FC<{ category: SimpleCategory }> = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-12">
      <motion.h2 
        className="text-3xl font-bold mb-6 flex items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {category.name}
        <motion.span
          initial={false}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="ml-2"
        >
          ▼
        </motion.span>
      </motion.h2>
      <motion.div 
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.projects.map((project) => (
            <ProjectCard key={`${project.name}-${project.twitter}`} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const NEARDirectory: React.FC = () => {
  const groupedProjects = groupProjectsByCategory(projects);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-12 text-center text-blue-600">NEAR Project Directory</h1>
      <div className="bg-gray-100 p-8 rounded-2xl shadow-inner">
        {groupedProjects.map((category) => (
          <CategorySection key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};
