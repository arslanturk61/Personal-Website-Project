'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechnologyIcon from './TechnologyIcon';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  technologies: string[];
}

interface ProjectsClientProps {
  categories: string[];
  projects: Project[];
}

export default function ProjectsClient({ categories, projects }: ProjectsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const featuredProject = projects.find(p => p.featured);
  
  const filteredProjects = selectedCategory === 'Tümü'
    ? projects.filter(p => !p.featured)
    : projects.filter(p => p.category === selectedCategory && !p.featured);

  return (
    <div className="space-y-12">
      {/* Öne Çıkan Proje */}
      {featuredProject && (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Öne Çıkan Proje
              </div>
              <h2 className="text-2xl font-bold text-[#252529]">
                {featuredProject.title}
              </h2>
              <p className="text-gray-600">
                {featuredProject.description}
              </p>
              <div className="flex gap-4">
                {featuredProject.technologies.map(tech => (
                  <TechnologyIcon key={tech} name={tech} />
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <Link
                  href={featuredProject.githubUrl}
                  className="px-6 py-2 bg-[#252529] text-white rounded-lg hover:bg-[#3a3a3e] transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href={featuredProject.demoUrl}
                  className="px-6 py-2 border border-[#252529] rounded-lg hover:bg-[#252529] hover:text-white transition-colors"
                >
                  Canlı Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Kategori Filtreleme */}
      <div className="flex flex-wrap gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-[#252529] text-white'
                : 'bg-white text-[#252529] hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projeler Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#252529]">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <TechnologyIcon key={tech} name={tech} />
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.githubUrl}
                  className="flex-1 text-center px-4 py-2 bg-[#252529] text-white rounded-lg hover:bg-[#3a3a3e] transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demoUrl}
                  className="flex-1 text-center px-4 py-2 border border-[#252529] text-[#252529] rounded-lg hover:bg-[#252529] hover:text-white transition-colors"
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
