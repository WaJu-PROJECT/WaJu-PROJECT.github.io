"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [fontSize, setFontSize] = useState("md");
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    document.documentElement.className = `font-size-${fontSize}`;
  }, [fontSize]);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const megaMenus = {
    jobseeker: (
      <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 z-50 animate-fade-in-up">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-brand-green mb-3 border-b-2 border-brand-green pb-1.5">お仕事を探す</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/search" className="text-gray-700 hover:text-brand-green flex items-center"><span className="text-brand-orange mr-1.5">▶</span>エリアから探す</Link></li>
              <li><Link href="/search" className="text-gray-700 hover:text-brand-green flex items-center"><span className="text-brand-orange mr-1.5">▶</span>職種から探す</Link></li>
              <li><Link href="/search" className="text-gray-700 hover:text-brand-green flex items-center"><span className="text-brand-orange mr-1.5">▶</span>働き方から探す</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-green mb-3 border-b-2 border-brand-green pb-1.5">就職支援情報</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/job-seeker" className="text-gray-700 hover:text-brand-green flex items-center"><span className="text-brand-orange mr-1.5">▶</span>就職・個別相談会</Link></li>
              <li><Link href="/job-seeker" className="text-gray-700 hover:text-brand-green flex items-center"><span className="text-brand-orange mr-1.5">▶</span>職場見学・体験</Link></li>
              <li><Link href="/job-seeker" className="text-gray-700 hover:text-brand-green flex items-center"><span className="text-brand-orange mr-1.5">▶</span>就職支援金について</Link></li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-100 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-brand-green opacity-10 rounded-full blur-lg"></div>
            <h4 className="font-bold text-brand-green mb-2 relative z-10 text-sm">介護職ってどんな仕事？</h4>
            <p className="text-xs text-gray-700 mb-3 relative z-10 leading-relaxed">未経験でも大丈夫！介護の仕事の魅力をご紹介します。</p>
            <Link href="/job-seeker" className="inline-block bg-white text-brand-green border border-brand-green text-xs font-bold py-1.5 px-3 rounded-full hover:bg-brand-green hover:text-white transition relative z-10">詳しく見る ＞</Link>
          </div>
        </div>
      </div>
    ),
    skillup: (
      <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 z-50 animate-fade-in-up">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-[#e91e63] mb-3 border-b-2 border-[#e91e63] pb-1.5">研修を探す</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/skill-up" className="text-gray-700 hover:text-[#e91e63] flex items-center"><span className="text-brand-orange mr-1.5">▶</span>介護の入門的研修</Link></li>
              <li><Link href="/skill-up" className="text-gray-700 hover:text-[#e91e63] flex items-center"><span className="text-brand-orange mr-1.5">▶</span>実務者研修</Link></li>
              <li><Link href="/skill-up" className="text-gray-700 hover:text-[#e91e63] flex items-center"><span className="text-brand-orange mr-1.5">▶</span>キャリアアップ研修</Link></li>
            </ul>
          </div>
          <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 col-span-2 relative overflow-hidden">
             <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#e91e63] opacity-5 rounded-full blur-xl"></div>
            <h4 className="font-bold text-[#e91e63] mb-2 relative z-10 text-sm">スキルアップ支援制度</h4>
            <p className="text-xs text-gray-700 leading-relaxed relative z-10">資格取得に向けた補助金や、働きながら学べる制度のご案内。<br/>より専門的な知識と技術を身につけ、キャリアアップを目指す方を全力でサポートします。</p>
          </div>
        </div>
      </div>
    ),
    office: (
      <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 z-50 animate-fade-in-up">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-brand-blue mb-3 border-b-2 border-brand-blue pb-1.5">採用・育成支援</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/nursing-office" className="text-gray-700 hover:text-brand-blue flex items-center"><span className="text-brand-orange mr-1.5">▶</span>求人情報の掲載申請</Link></li>
              <li><Link href="/nursing-office" className="text-gray-700 hover:text-brand-blue flex items-center"><span className="text-brand-orange mr-1.5">▶</span>職場見学・体験の受け入れ</Link></li>
              <li><Link href="/nursing-office" className="text-gray-700 hover:text-brand-blue flex items-center"><span className="text-brand-orange mr-1.5">▶</span>合同就職説明会への参加</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-blue mb-3 border-b-2 border-brand-blue pb-1.5">助成金・制度案内</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/nursing-office" className="text-gray-700 hover:text-brand-blue flex items-center"><span className="text-brand-orange mr-1.5">▶</span>各種助成金のご案内</Link></li>
              <li><Link href="/nursing-office" className="text-gray-700 hover:text-brand-blue flex items-center"><span className="text-brand-orange mr-1.5">▶</span>外国人材受け入れ支援</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end py-4">
          
          {/* LEFT SIDE: Logo & 3 Buttons */}
          <div className="flex flex-col justify-between gap-5">
            {/* Logo & Title */}
            <Link href="/" className="flex items-center group mt-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mr-3 border-2 border-brand-orange shadow-sm group-hover:shadow-md transition">
                <span className="text-brand-orange font-bold text-xs md:text-sm">ロゴ</span>
              </div>
              <div>
                <span className="text-[10px] md:text-xs text-gray-500 mb-0.5 block font-medium">サンプル県の介護のお仕事応援ポータルサイト</span>
                <h1 className="text-xl md:text-2xl font-extrabold text-brand-orange tracking-tight">SAMPLE KAIGO PORTAL</h1>
              </div>
            </Link>

            {/* 3 Mega Menu Buttons (Desktop) */}
            <div className="hidden lg:flex justify-start gap-2">
              <button 
                onClick={() => toggleMenu('jobseeker')}
                className={`flex-1 py-1.5 px-3 rounded-lg font-bold text-white text-sm text-center transition-all flex justify-center items-center gap-1.5 relative overflow-hidden ${activeMenu === 'jobseeker' ? 'bg-gradient-to-b from-[#00695c] to-[#004d40] shadow-inner transform scale-[0.98]' : 'bg-gradient-to-b from-[#26a69a] to-[#00897b] hover:from-[#4db6ac] hover:to-[#00796b] shadow-[0_3px_5px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-px'}`}
              >
                求職者の方へ
                <svg className={`w-3.5 h-3.5 transform transition-transform ${activeMenu === 'jobseeker' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <button 
                onClick={() => toggleMenu('skillup')}
                className={`flex-1 py-1.5 px-3 rounded-lg font-bold text-white text-sm text-center transition-all flex justify-center items-center gap-1.5 relative overflow-hidden ${activeMenu === 'skillup' ? 'bg-gradient-to-b from-[#ad1457] to-[#880e4f] shadow-inner transform scale-[0.98]' : 'bg-gradient-to-b from-[#f06292] to-[#d81b60] hover:from-[#f48fb1] hover:to-[#c2185b] shadow-[0_3px_5px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-px'}`}
              >
                在職中の方へ
                <svg className={`w-3.5 h-3.5 transform transition-transform ${activeMenu === 'skillup' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <button 
                onClick={() => toggleMenu('office')}
                className={`flex-1 py-1.5 px-3 rounded-lg font-bold text-white text-sm text-center transition-all flex justify-center items-center gap-1.5 relative overflow-hidden ${activeMenu === 'office' ? 'bg-gradient-to-b from-[#0d47a1] to-[#0a192f] shadow-inner transform scale-[0.98]' : 'bg-gradient-to-b from-[#42a5f5] to-[#1e88e5] hover:from-[#64b5f6] hover:to-[#1976d2] shadow-[0_3px_5px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-px'}`}
              >
                事業所の方へ
                <svg className={`w-3.5 h-3.5 transform transition-transform ${activeMenu === 'office' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Desktop Navigation */}
          <div className="hidden lg:flex flex-col items-end justify-between h-full gap-5">
            {/* Top Utility Nav */}
            <div className="flex items-center space-x-6 mt-1">
              <div className="flex items-center text-xs text-gray-600 font-medium">
                <span className="mr-2">文字サイズ</span>
                <div className="flex bg-gray-100 rounded overflow-hidden border border-gray-200">
                  <button onClick={() => setFontSize("sm")} className={`px-2 py-0.5 hover:bg-gray-200 transition ${fontSize === "sm" ? "bg-gray-600 text-white font-bold" : ""}`}>小</button>
                  <button onClick={() => setFontSize("md")} className={`px-2 py-0.5 hover:bg-gray-200 transition ${fontSize === "md" ? "bg-gray-600 text-white font-bold" : ""}`}>中</button>
                  <button onClick={() => setFontSize("lg")} className={`px-2 py-0.5 hover:bg-gray-200 transition ${fontSize === "lg" ? "bg-gray-600 text-white font-bold" : ""}`}>大</button>
                </div>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="キーワード検索" 
                  className="pl-3 pr-8 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-xs w-40"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-orange">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </div>
            </div>

            {/* Circular Icons Nav */}
            <div className="flex space-x-5">
              <Link href="/search" className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full border-[2px] border-brand-green flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm mb-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-brand-green group-hover:text-[#00897b]">仕事を探す</span>
              </Link>
              <Link href="/job-seeker" className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full border-[2px] border-brand-orange flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm mb-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-brand-orange group-hover:text-[#e65100]">相談会</span>
              </Link>
              <Link href="/skill-up" className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full border-[2px] border-[#e91e63] flex items-center justify-center text-[#e91e63] group-hover:bg-[#e91e63] group-hover:text-white transition-all duration-300 shadow-sm mb-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <span className="text-[10px] font-bold text-[#e91e63] group-hover:text-[#c2185b]">各種研修</span>
              </Link>
              <Link href="/contact" className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full border-[2px] border-brand-blue flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm mb-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-[10px] font-bold text-brand-blue group-hover:text-[#1565c0]">お問い合わせ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {activeMenu && megaMenus[activeMenu]}
      
      {activeMenu && (
        <div className="fixed inset-0 top-[180px] z-40 bg-black/10 backdrop-blur-sm transition-opacity" onClick={() => setActiveMenu(null)}></div>
      )}
    </header>
  );
}
