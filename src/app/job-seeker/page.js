import Link from "next/link";
import Image from "next/image";

export default function JobSeekerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-brand-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">介護のお仕事をお探しの方へ</h1>
          <p className="text-lg opacity-90">SAITAMA KAIGO NEXTがあなたの就職活動を全力でサポートします。</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-orange pl-4">充実した就職支援制度</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              無資格・未経験からでも安心して介護のお仕事を始められるよう、埼玉県では様々な支援を行っています。研修の受講費用補助や、就職支援金の貸付制度など、キャリアのスタートを後押しします。
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-orange mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">介護職員初任者研修の受講料補助</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-orange mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">就職支援金・再就職準備金 最大40万円貸付</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-orange mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">無料の職場見学・職場体験マッチング</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/consult.png" alt="就職相談の様子" fill className="object-cover" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 text-center border-t-4 border-brand-green">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">まずは相談してみませんか？</h3>
          <p className="text-gray-600 mb-8">専門のキャリアアドバイザーが、あなたに合った働き方を一緒に考えます。</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/search" className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-8 rounded-full shadow transition">
              求人を検索する
            </Link>
            <button className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3 px-8 rounded-full shadow transition">
              オンライン相談を予約
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
