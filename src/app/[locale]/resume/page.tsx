import { useTranslations } from 'next-intl';
import { Footer } from '@/components/code.demo';

export default function Resume() {
  const t = useTranslations('navigation');

  return (
    <>
      <main className="min-h-screen bg-[#F5F5F7]">
        <div className="w-full px-4 py-16 relative">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-[#252529]">{t('resume')}</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#252529]">Eğitim</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[#252529] pl-4 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-medium text-[#252529]">Üniversite Adı</h3>
                  <p className="text-gray-600">Bölüm</p>
                  <p className="text-sm text-gray-500">2020 - 2024</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#252529]">Deneyim</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[#252529] pl-4 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-medium text-[#252529]">Şirket Adı</h3>
                  <p className="text-gray-600">Pozisyon</p>
                  <p className="text-sm text-gray-500">2022 - Günümüz</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Başarı 1</li>
                    <li>Başarı 2</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
