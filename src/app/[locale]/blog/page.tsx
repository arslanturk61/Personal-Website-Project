import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/code.demo';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readCount: number;
  commentCount: number;
}

const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Yapay Zeka ve Gelecek",
    date: "01 Ocak 2024",
    summary: "Yapay zekanın geleceğimizi nasıl şekillendireceğine dair detaylı bir analiz...",
    tags: ["Yapay Zeka", "Teknoloji"],
    readCount: 1250,
    commentCount: 25
  },
  {
    id: 2,
    title: "Modern Web Geliştirme",
    date: "02 Ocak 2024",
    summary: "Modern web teknolojileri ve best practice'ler hakkında kapsamlı bir rehber...",
    tags: ["Web Geliştirme", "Programlama"],
    readCount: 890,
    commentCount: 15
  }
];

const popularPosts = samplePosts.sort((a, b) => b.readCount - a.readCount).slice(0, 3);
const categories = ["Yapay Zeka", "Web Geliştirme", "Programlama", "Teknoloji"];

export default function BlogPage() {
  const t = useTranslations('navigation');
  
  return (
    <>
      <div className="min-h-screen bg-[#F5F5F7]">
        <div className="w-full px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[#343437] text-4xl font-bold mb-6">{t('blog')}</h1>
            
            {/* Ana İçerik ve Kenar Çubuğu Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Blog Yazıları Listesi */}
              <div className="lg:col-span-2">
                <div className="grid gap-6">
                  {samplePosts.map(post => (
                    <article key={post.id} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map(tag => (
                          <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-[#343437] text-2xl font-semibold mb-2">{post.title}</h2>
                      <p className="text-[#343437]/70 mb-4">{post.date}</p>
                      <p className="text-[#343437] mb-4">{post.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-[#343437]/70">
                          <span>👁️ {post.readCount} okuma</span>
                          <span>💬 {post.commentCount} yorum</span>
                        </div>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                          Devamını Oku
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Kenar Çubuğu */}
              <div className="space-y-6">
                {/* Kategoriler */}
                <div className="bg-white border rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Kategoriler</h2>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <Link
                        key={category}
                        href={`/blog/category/${category.toLowerCase()}`}
                        className="block text-[#343437] hover:text-blue-600 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popüler Yazılar */}
                <div className="bg-white border rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Popüler Yazılar</h2>
                  <div className="space-y-4">
                    {popularPosts.map(post => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="block group"
                      >
                        <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#343437]/70">{post.readCount} okuma</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
