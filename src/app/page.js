"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const newsData = [
    { id: 1, date: "2026.06.30", category: "jobseeker", title: "【参加無料】7月の介護のお仕事・個別就職相談会のお知らせ" },
    { id: 2, date: "2026.06.25", category: "office", title: "【事業所向け】OJT指導者育成研修の受講申し込み開始" },
    { id: 3, date: "2026.06.15", category: "skillup", title: "【介護職員向け】キャリアアップ研修の日程確定のお知らせ" },
    { id: 4, date: "2026.06.10", category: "all", title: "ポータルサイトをリニューアルしました" },
  ];

  const filteredNews = activeTab === "all" ? newsData : newsData.filter(item => item.category === activeTab);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center bg-gray-100 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.png" 
            alt="明るい介護現場" 
            fill 
            className="object-cover object-center opacity-90"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
              介護で<span className="text-brand-orange">働く</span>・<span className="text-brand-green">学ぶ</span>・<span className="text-brand-blue">つながる</span>！
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-medium">
              求人・相談・研修を通じて<br className="hidden md:block" />介護の仕事と人をつなぎます
            </p>

            {/* Search Box Widget */}
            <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-brand-orange transform hover:scale-[1.01] transition-transform">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">お仕事検索</h3>
                <span className="bg-orange-100 text-brand-orange text-sm font-bold px-3 py-1 rounded-full">掲載求人数 3,009件</span>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="キーワードで検索" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-brand-orange">
                    <option value="">雇用形態</option>
                    <option value="1">正社員</option>
                    <option value="2">パート・アルバイト</option>
                  </select>
                  <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-brand-orange">
                    <option value="">サービス種類</option>
                    <option value="1">特別養護老人ホーム</option>
                    <option value="2">訪問介護</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <Link href="/search" className="flex-1 bg-brand-orange hover:bg-brand-orange-hover text-white text-center font-bold py-3 px-4 rounded-lg shadow transition">
                    検索する
                  </Link>
                </div>
                <button className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3 px-4 rounded-lg shadow transition flex flex-col items-center justify-center">
                  <span>求人を探してもらう</span>
                  <span className="text-xs font-normal opacity-90">（簡単無料登録）</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-[#fff5eb] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-8 border-brand-orange">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-orange mb-10 flex items-center">
              <span className="text-4xl mr-2">📰</span>
              NEWS ＆ トピックス
            </h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 border-b-2 border-gray-100 pb-4">
              <button onClick={() => setActiveTab("all")} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === "all" ? "bg-brand-green text-white shadow-md transform scale-105" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>すべて</button>
              <button onClick={() => setActiveTab("jobseeker")} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === "jobseeker" ? "bg-brand-orange text-white shadow-md transform scale-105" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>求職者向け</button>
              <button onClick={() => setActiveTab("office")} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === "office" ? "bg-brand-blue text-white shadow-md transform scale-105" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>事業所向け</button>
              <button onClick={() => setActiveTab("skillup")} className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === "skillup" ? "bg-brand-purple text-white shadow-md transform scale-105" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>介護職員向け</button>
            </div>

            {/* News List */}
            <div className="bg-white rounded-xl overflow-hidden">
              {filteredNews.map(news => (
                <div key={news.id} className="flex flex-col md:flex-row md:items-center p-5 border-b border-dashed border-gray-200 last:border-b-0 hover:bg-orange-50 transition group cursor-pointer">
                  <div className="flex items-center gap-4 mb-2 md:mb-0 md:w-56 shrink-0">
                    <span className="text-gray-500 text-sm font-medium">{news.date}</span>
                    <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${news.category === 'jobseeker' ? 'bg-brand-orange' : news.category === 'office' ? 'bg-brand-blue' : news.category === 'skillup' ? 'bg-brand-purple' : 'bg-gray-500'}`}>
                      {news.category === 'jobseeker' ? '求職者' : news.category === 'office' ? '事業所' : news.category === 'skillup' ? '介護職員' : 'お知らせ'}
                    </span>
                  </div>
                  <Link href="#" className="text-gray-800 font-medium group-hover:text-brand-orange transition flex-1 flex justify-between items-center">
                    {news.title}
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="#" className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3 px-8 rounded-full transition shadow-md">
              記事一覧を見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Consult Info & Voice Section */}
      <section className="py-24 bg-brand-orange relative overflow-hidden text-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-400 opacity-20 rounded-full blur-2xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 flex items-center justify-center tracking-tight">
              <span className="text-yellow-200 mr-3 text-4xl">✨</span>
              介護のお仕事相談会とは
              <span className="text-yellow-200 ml-3 text-4xl">✨</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed font-medium md:px-20 text-orange-50">
              SAMPLE KAIGO PORTALでは、介護の就職・個別相談会を実施します！<br className="hidden md:block" />
              相談会では、地元の介護事業所担当者と直接相談ができる就職相談会も同時開催いたします。<br className="hidden md:block" />
              ぜひこの機会にいろいろとご質問してください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="bg-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-200 border-b-2 border-white/20 pb-3">こんな方におすすめ！</h3>
              <ul className="space-y-4 font-medium text-lg">
                <li className="flex items-center"><div className="w-8 h-8 rounded-full bg-yellow-400 text-brand-orange flex items-center justify-center mr-4 font-black">✓</div>まだ就業を決めていない方</li>
                <li className="flex items-center"><div className="w-8 h-8 rounded-full bg-yellow-400 text-brand-orange flex items-center justify-center mr-4 font-black">✓</div>資格をお持ちでない方</li>
                <li className="flex items-center"><div className="w-8 h-8 rounded-full bg-yellow-400 text-brand-orange flex items-center justify-center mr-4 font-black">✓</div>アクティブシニアの方</li>
                <li className="flex items-center"><div className="w-8 h-8 rounded-full bg-yellow-400 text-brand-orange flex items-center justify-center mr-4 font-black">✓</div>業界未経験で少し話を聞いてみたい方</li>
              </ul>
              <div className="mt-8 p-5 bg-white text-brand-orange rounded-xl text-center font-bold text-lg shadow-inner transform -rotate-1">
                <span className="text-2xl mr-2">💡</span>求職活動参加証明書の発行も可能です！
              </div>
            </div>
            <div className="relative h-72 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image src="/images/consult.png" alt="相談会の様子" fill className="object-cover" />
            </div>
          </div>

          {/* Voice Section */}
          <div className="relative">
            <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 w-32 h-1 bg-yellow-400/50 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-yellow-100 italic tracking-wider">
              VOICE <span className="text-2xl not-italic text-white tracking-normal font-bold">〜参加者の声〜</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="bg-white text-gray-800 p-8 md:p-10 rounded-[40px] rounded-tl-none shadow-2xl relative transform hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg border-4 border-brand-orange">声1</div>
                <p className="text-lg leading-relaxed font-medium text-gray-700">「未経験で面接や施設訪問はハードルが高かったのですが、相談会なら気軽に話を聞くことができ、不安なく面接に進めました！」</p>
                <div className="text-right mt-6 text-brand-orange font-bold border-t border-gray-100 pt-4">（30代・女性 / 異業種からの転職）</div>
              </div>
              <div className="bg-white text-gray-800 p-8 md:p-10 rounded-[40px] rounded-tr-none shadow-2xl relative md:mt-16 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-green rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg border-4 border-brand-orange">声2</div>
                <p className="text-lg leading-relaxed font-medium text-gray-700">「介護のしごとは未経験だったので、資格取得で相談しました。担当の方が親身になって聞いてくれたので心強かったです。」</p>
                <div className="text-right mt-6 text-brand-green font-bold border-t border-gray-100 pt-4">（50代・男性 / 再就職）</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Banners */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/job-seeker" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-40 relative">
                <Image src="/images/consult.png" alt="就職相談会" fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="text-xs text-brand-orange font-bold mb-1 block">施設の担当者と直接話せるチャンス！</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition">介護のお仕事<br/>就職・個別相談会</h3>
              </div>
            </Link>
            
            <Link href="/skill-up" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-40 relative">
                <Image src="/images/training.png" alt="eラーニング" fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="text-xs text-brand-green font-bold mb-1 block">スマホ学習で介護の知識が身につく！</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-green transition">介護の入門的研修<br/>eラーニング</h3>
              </div>
            </Link>

            <Link href="#" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-40 relative bg-gray-200">
                 <Image src="/images/tour.png" alt="職場見学・体験" fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="text-xs text-brand-blue font-bold mb-1 block">雰囲気がわかるから、就職後も安心</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition">職場見学・体験</h3>
              </div>
            </Link>

            <Link href="#" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-40 relative bg-gray-200">
                 <Image src="/images/charm.png" alt="介護の仕事と魅力" fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="text-xs text-brand-purple font-bold mb-1 block">働き方もキャリアも、想像以上に多彩</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition">介護の仕事と魅力</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="py-16 bg-[#fdfaf6] relative border-t-8 border-dashed border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center">
            <span className="text-brand-orange mr-2">✨</span>
            地域エリアの介護・福祉関連リンクのご案内
            <span className="text-brand-green ml-2">✨</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Link Items */}
            {[
              { text: "サンプル介護ねっと", sub: "〇〇県", border: "border-red-400" },
              { text: "〇〇県福祉人材センター", sub: "社会福祉法人 〇〇県社会福祉協議会", border: "border-blue-400" },
              { text: "介護職員しっかり応援プロジェクト", sub: "介護の魅力PR特設公開中☆", border: "border-gray-300" },
              { text: "〇〇県外国人介護職員応援宣言", sub: "〇〇県", border: "border-green-400" },
              { text: "実務者研修受講料補助金", sub: "〇〇県介護職員共済協同組合事業", border: "border-gray-300" },
              { text: "ハートフルメッセージ募集", sub: "介護スタッフに対する", border: "border-pink-300" },
              { text: "厚生労働省", sub: "Ministry of Health, Labour and Welfare", border: "border-blue-800" },
              { text: "介護福祉士修学資金貸付事業", sub: "〇〇県", border: "border-gray-300" }
            ].map((link, idx) => (
              <a key={idx} href="#" className={`bg-white border-2 ${link.border} rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-brand-orange transition-colors duration-300"></div>
                <span className="text-xs text-gray-500 mb-1 group-hover:text-gray-700">{link.sub}</span>
                <span className="font-bold text-gray-800 text-sm group-hover:text-brand-green transition-colors">{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
