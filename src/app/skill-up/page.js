import Link from "next/link";
import Image from "next/image";

export default function SkillUpPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-brand-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">在職中の方へ（スキルアップ・研修）</h1>
          <p className="text-lg opacity-90">現役介護職員の皆様のさらなるキャリアアップを支援します。</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/training.png" alt="研修の様子" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-green pl-4">実務者研修・キャリアアップ研修</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              介護福祉士を目指す方のための「実務者研修」や、現場のリーダーを目指す方向けの「チームマネジメント研修」など、様々なプログラムをご用意しています。働きながらでも受講しやすいeラーニング講座も充実しています。
            </p>
            <Link href="#" className="text-brand-green font-bold hover:underline flex items-center">
              現在募集中の研修一覧を見る
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
