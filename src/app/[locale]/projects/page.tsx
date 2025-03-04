import { useTranslations } from 'next-intl';
import { Footer } from '@/components/code.demo';
import ProjectsClient from './ProjectsClient';

const categories = ['Tümü', 'Web Geliştirme', 'Mobil Uygulama', 'AI Projeleri', 'Full Stack'];

const projects = [
  {
    id: 1,
    title: "AI Portfolyo Web Sitesi",
    description: "Next.js 13, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş, yapay zeka destekli kişisel portfolyo sitesi.",
    category: "Full Stack",
    image: "/projects/portfolio.jpg",
    githubUrl: "https://github.com/username/portfolio",
    demoUrl: "https://portfolio.demo.com",
    featured: true,
    technologies: ['nextjs', 'typescript', 'tailwind', 'nodejs']
  },
  {
    id: 2,
    title: "E-Ticaret Uygulaması",
    description: "Modern e-ticaret çözümü. Redux ile durum yönetimi, Stripe ile ödeme entegrasyonu.",
    category: "Web Geliştirme",
    image: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/username/ecommerce",
    demoUrl: "https://ecommerce.demo.com",
    featured: false,
    technologies: ['react', 'redux', 'nodejs', 'mongodb']
  },
  {
    id: 3,
    title: "AI Chat Bot",
    description: "OpenAI GPT-3 API kullanan akıllı sohbet robotu uygulaması.",
    category: "AI Projeleri",
    image: "/projects/chatbot.jpg",
    githubUrl: "https://github.com/username/chatbot",
    demoUrl: "https://chatbot.demo.com",
    featured: false,
    technologies: ['python', 'tensorflow', 'react', 'flask']
  },
  // Diğer projeler buraya eklenebilir
];

export default function Projects() {
  const t = useTranslations('navigation');

  return (
    <>
      <main className="min-h-screen bg-[#F5F5F7]">
        <div className="w-full px-4 py-16 relative">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-[#252529]">{t('projects')}</h1>
            
            <ProjectsClient 
              categories={categories}
              projects={projects}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
