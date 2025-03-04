import { useTranslations } from 'next-intl';
import { Footer } from '@/components/code.demo';
import { SplashCursor } from '@/components/ui/splash-cursor';

export default function HomePage() {
  const t = useTranslations('navigation');
  
  return (
    <div className="w-full bg-[#F5F5F7]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-[#F5F5F7] w-full relative">
        <SplashCursor />
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-[#1D1D1F]">Merhaba, <br></br>ben Abdullah ARSLANTÜRK</h1>
            <p className="text-2xl text-[#1D1D1F] mb-4">Full Stack Web Developer</p>
            <p className="text-lg text-[#1D1D1F]">Full-stack web geliştirme konusunda uzmanlaşmış, yenilikçi çözümler üreten bir bilgisayar programcısıyım.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-[#F5F5F7] w-full">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1D1D1F]">Öne Çıkan Projeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-2 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">Proje 1</h3>
              <p className="text-[#1D1D1F] mb-4">Proje açıklaması burada yer alacak.</p>
              <a href="#" className="inline-block bg-[#1D1D1F] hover:bg-gray-800 text-white px-4 py-2 rounded">Detaylar</a>
            </div>
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-2 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">Proje 2</h3>
              <p className="text-[#1D1D1F] mb-4">Proje açıklaması burada yer alacak.</p>
              <a href="#" className="inline-block bg-[#1D1D1F] hover:bg-gray-800 text-white px-4 py-2 rounded">Detaylar</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-[#FFFFFF] w-full">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1D1D1F]">Son Blog Yazıları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <article className="bg-[#F5F5F7] p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">Blog Başlığı 1</h3>
              <p className="text-[#1D1D1F] mb-4">Kısa özet...</p>
              <a href="#" className="inline-block bg-[#1D1D1F] hover:bg-gray-800 text-white px-4 py-2 rounded">Devamını Oku</a>
            </article>
            <article className="bg-[#F5F5F7] p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">Blog Başlığı 2</h3>
              <p className="text-[#1D1D1F] mb-4">Kısa özet...</p>
              <a href="#" className="inline-block bg-[#1D1D1F] hover:bg-gray-800 text-white px-4 py-2 rounded">Devamını Oku</a>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center bg-[#F5F5F7] w-full">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="space-x-6 mb-8">
            <a href="#" className="text-2xl text-[#1D1D1F] hover:text-gray-600 transition-colors"><i className="fab fa-github"></i></a>
            <a href="#" className="text-2xl text-[#1D1D1F] hover:text-gray-600 transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-2xl text-[#1D1D1F] hover:text-gray-600 transition-colors"><i className="fab fa-twitter"></i></a>
          </div>
          <a href="mailto:your@email.com" 
             className="inline-block bg-[#1D1D1F] hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold transition-colors">
            Bana Ulaşın
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
