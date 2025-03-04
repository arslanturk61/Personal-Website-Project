import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Footer } from '@/components/code.demo';

export default function About() {
  const t = useTranslations('navigation');

  return (
    <>
      <main className="min-h-screen bg-[#F5F5F7]">
        <div className="w-full px-4 py-16 relative">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
          
          <div className="relative z-10 max-w-7xl mx-auto space-y-12">
            <h1 className="text-4xl font-bold mb-8 text-[#252529]">{t('about')}</h1>
            
            {/* Ben Kimim? Bölümü */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/your-photo.jpg" // Fotoğrafınızı buraya ekleyin
                    alt="Profil Fotoğrafı"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold text-[#252529] mb-4">Ben Kimim?</h2>
                <p className="text-gray-600 leading-relaxed">
                  [Kendinizi tanıtan detaylı bir yazı ekleyin...]
                </p>
              </div>
            </div>

            {/* Becerilerim Bölümü */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-[#252529] mb-4">Becerilerim</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium text-[#252529]">Frontend Teknolojileri</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                {/* Diğer beceri kategorilerini ekleyin */}
              </div>
            </div>

            {/* Deneyim ve Eğitim Bölümü */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold text-[#252529] mb-4">Deneyim</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-[#252529]">Visera Yazılım</h3>
                    <p className="text-sm text-gray-500">2019 - 2021</p>
                    <p className="text-gray-600 mt-2">Grafik Tasarım</p>
                  </div> 
                </div>
                <div className="space-y-4 mt-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-[#252529]">Visera Yazılım</h3>
                    <p className="text-sm text-gray-500">2019 - 2021</p>
                    <p className="text-gray-600 mt-2">Grafik Tasarım</p>
                  </div> 
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold text-[#252529] mb-4">Eğitim & Sertifikalar</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-[#252529]">Mehmet Akif Ersoy Üniversitesi</h3>
                    <p className="text-sm text-gray-500">2021-2023</p>
                    <p className="text-gray-600 mt-2">İnternet ve Ağ Teknolojileri</p>
                  </div>
                  {/* Diğer eğitimleri ekleyin */}
                </div>
              </div>
            </div>

            {/* Hobiler & İlgi Alanları Bölümü */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-[#252529] mb-4">Hobiler & İlgi Alanları</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-[#252529] mb-2">[Hobi Kategorisi]</h3>
                  <p className="text-gray-600 text-sm">[Hobi açıklaması]</p>
                </div>
                {/* Diğer hobileri ekleyin */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
