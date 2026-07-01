"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: "",
    company: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#fdfaf6] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">お問い合わせの送信が完了しました</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              お問い合わせいただき、誠にありがとうございます。<br/>
              ご入力いただいたメールアドレス宛に受付完了メールを自動送信いたしました。<br/>
              担当者より順次ご回答申し上げますので、今しばらくお待ちくださいませ。
            </p>
            <Link href="/" className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-8 rounded-full shadow-md transition-all">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfaf6] py-12 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green mb-4 inline-block relative">
            お問い合わせ
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-brand-orange rounded-full"></span>
          </h1>
          <p className="text-gray-600 mt-6">
            当ポータルサイトに関するご質問やご相談、求人掲載についてのお問い合わせは、<br className="hidden md:block"/>
            以下のフォームよりお気軽にご連絡ください。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border-t-8 border-brand-orange p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Type */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start border-b border-gray-100 pb-8">
              <label className="md:col-span-1 font-bold text-gray-800 pt-2 flex items-center">
                お問い合わせ種別
                <span className="ml-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded">必須</span>
              </label>
              <div className="md:col-span-3">
                <select 
                  name="type" 
                  required 
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg p-3 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-0 outline-none transition"
                >
                  <option value="">選択してください</option>
                  <option value="jobseeker">求職者の方（就職相談・サイトの使い方など）</option>
                  <option value="office">事業所の方（求人掲載・イベント参加など）</option>
                  <option value="other">その他のお問い合わせ</option>
                </select>
              </div>
            </div>

            {/* Company */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b border-gray-100 pb-8">
              <label className="md:col-span-1 font-bold text-gray-800 flex items-center">
                法人名・事業所名
                <span className="ml-2 bg-gray-400 text-white text-[10px] px-2 py-1 rounded">任意</span>
              </label>
              <div className="md:col-span-3">
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="例：株式会社サンプルライフケア" 
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-brand-orange focus:ring-0 outline-none transition"
                />
              </div>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b border-gray-100 pb-8">
              <label className="md:col-span-1 font-bold text-gray-800 flex items-center">
                お名前
                <span className="ml-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded">必須</span>
              </label>
              <div className="md:col-span-3">
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="例：埼玉 太郎" 
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-brand-orange focus:ring-0 outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b border-gray-100 pb-8">
              <label className="md:col-span-1 font-bold text-gray-800 flex items-center">
                メールアドレス
                <span className="ml-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded">必須</span>
              </label>
              <div className="md:col-span-3">
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="例：sample@example.com" 
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-brand-orange focus:ring-0 outline-none transition"
                />
              </div>
            </div>

            {/* Message */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start pb-4">
              <label className="md:col-span-1 font-bold text-gray-800 pt-2 flex items-center">
                お問い合わせ内容
                <span className="ml-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded">必須</span>
              </label>
              <div className="md:col-span-3">
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="お問い合わせ内容をご記入ください。" 
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-brand-orange focus:ring-0 outline-none transition resize-y"
                ></textarea>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 text-sm text-gray-600 h-32 overflow-y-scroll">
              <h4 className="font-bold mb-2 text-gray-800">個人情報の取り扱いについて</h4>
              <p>ご入力いただいた個人情報は、お問い合わせの対応および関連するご連絡の目的にのみ利用いたします。法令に基づく場合を除き、ご本人の同意なしに第三者へ提供することはございません。</p>
            </div>

            <div className="flex justify-center items-center space-x-2 mb-8">
              <input type="checkbox" id="privacy" required className="w-5 h-5 text-brand-orange rounded border-gray-300 focus:ring-brand-orange" />
              <label htmlFor="privacy" className="text-gray-800 font-bold cursor-pointer">
                個人情報の取り扱いに同意する
              </label>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-brand-green hover:bg-brand-green-hover text-white text-lg font-bold py-4 px-16 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                入力内容を確認して送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
