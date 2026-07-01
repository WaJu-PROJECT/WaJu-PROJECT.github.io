import Link from "next/link";

export default function NursingOfficePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">介護事業所の方へ</h1>
          <p className="text-lg opacity-90">人材確保・定着のための支援制度をご案内します。</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border-t-4 border-brand-blue">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">介護人材の採用・育成支援</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-100 p-6 rounded-lg bg-gray-50 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-brand-blue mb-3">求人掲載のお申し込み</h3>
              <p className="text-sm text-gray-600 mb-4">本ポータルサイトへの求人情報掲載は無料です。事業所の魅力を広くアピールできます。</p>
              <button className="w-full bg-white border border-brand-blue text-brand-blue hover:bg-blue-50 font-bold py-2 px-4 rounded transition">掲載申請フォーム</button>
            </div>
            <div className="border border-gray-100 p-6 rounded-lg bg-gray-50 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-brand-blue mb-3">職場体験受け入れ</h3>
              <p className="text-sm text-gray-600 mb-4">求職者の職場体験やインターンシップの受け入れ事業所として登録できます。</p>
              <button className="w-full bg-white border border-brand-blue text-brand-blue hover:bg-blue-50 font-bold py-2 px-4 rounded transition">受け入れ登録</button>
            </div>
            <div className="border border-gray-100 p-6 rounded-lg bg-gray-50 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-brand-blue mb-3">外国人材受け入れ支援</h3>
              <p className="text-sm text-gray-600 mb-4">特定技能などの外国人介護人材を受け入れるためのノウハウや補助金をご案内します。</p>
              <button className="w-full bg-white border border-brand-blue text-brand-blue hover:bg-blue-50 font-bold py-2 px-4 rounded transition">詳細を見る</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
