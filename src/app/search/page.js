"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";

export default function SearchPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const dummyJobs = [
    { id: 1, title: "特別養護老人ホーム さくら苑 - 介護職員", type: "正社員", salary: "月給 220,000円 〜 280,000円", location: "さいたま市大宮区", tag: "未経験歓迎" },
    { id: 2, title: "訪問介護ステーション あおぞら - 登録ヘルパー", type: "パート", salary: "時給 1,500円 〜 1,800円", location: "川口市", tag: "週1日からOK" },
    { id: 3, title: "デイサービス 陽だまり - 介護職", type: "正社員", salary: "月給 210,000円 〜 250,000円", location: "川越市", tag: "土日休み" },
    { id: 4, title: "グループホーム 笑顔の家 - 夜勤専従", type: "パート", salary: "1勤務 22,000円", location: "熊谷市", tag: "WワークOK" },
  ];

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleAddToFavorites = () => {
    setToastMessage("お気に入りに登録しました");
    setIsToastVisible(true);
    setIsModalOpen(false);
  };

  const handleApply = () => {
    setToastMessage("応募画面へ遷移します（モックアップ）");
    setIsToastVisible(true);
    setIsModalOpen(false);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-green mb-8 border-b-4 border-brand-orange pb-4 inline-block">お仕事検索結果</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters using Accordion */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">絞り込み検索</h2>
              <Accordion title="雇用形態" defaultOpen={true}>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3"><input type="checkbox" className="form-checkbox h-5 w-5 text-brand-orange rounded border-gray-300" /><span className="text-gray-700">正社員</span></label>
                  <label className="flex items-center space-x-3"><input type="checkbox" className="form-checkbox h-5 w-5 text-brand-orange rounded border-gray-300" /><span className="text-gray-700">パート・アルバイト</span></label>
                  <label className="flex items-center space-x-3"><input type="checkbox" className="form-checkbox h-5 w-5 text-brand-orange rounded border-gray-300" /><span className="text-gray-700">契約社員</span></label>
                </div>
              </Accordion>
              <Accordion title="サービス種類" defaultOpen={true}>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3"><input type="checkbox" className="form-checkbox h-5 w-5 text-brand-orange rounded border-gray-300" /><span className="text-gray-700">特別養護老人ホーム</span></label>
                  <label className="flex items-center space-x-3"><input type="checkbox" className="form-checkbox h-5 w-5 text-brand-orange rounded border-gray-300" /><span className="text-gray-700">デイサービス</span></label>
                  <label className="flex items-center space-x-3"><input type="checkbox" className="form-checkbox h-5 w-5 text-brand-orange rounded border-gray-300" /><span className="text-gray-700">訪問介護</span></label>
                </div>
              </Accordion>
              <button className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-4 rounded-lg transition mt-4 shadow-md">
                この条件で検索
              </button>
            </div>
          </div>

          {/* Job List */}
          <div className="w-full lg:w-2/3">
            <div className="mb-4 flex justify-between items-center text-sm text-gray-600">
              <p>該当件数: <span className="font-bold text-lg text-brand-orange">{dummyJobs.length}</span> 件</p>
              <select className="border border-gray-300 rounded px-3 py-1 outline-none focus:ring-1 focus:ring-brand-orange">
                <option>新着順</option>
                <option>給与が高い順</option>
              </select>
            </div>

            <div className="space-y-6">
              {dummyJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-brand-blue text-xs font-bold px-2 py-1 rounded">{job.type}</span>
                    <span className="bg-orange-50 text-brand-orange text-xs font-bold px-2 py-1 rounded border border-orange-200">{job.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-brand-green cursor-pointer" onClick={() => handleOpenModal(job)}>{job.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-700 bg-gray-50 p-2 rounded">
                      <svg className="w-5 h-5 mr-2 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {job.salary}
                    </div>
                    <div className="flex items-center text-gray-700 bg-gray-50 p-2 rounded">
                      <svg className="w-5 h-5 mr-2 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {job.location}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => handleOpenModal(job)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition">
                      詳細を見る
                    </button>
                    <button onClick={handleApply} className="flex-1 bg-brand-green hover:bg-brand-green-hover text-white font-bold py-2 px-4 rounded shadow-sm transition">
                      応募する
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="求人クイックビュー">
        {selectedJob && (
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{selectedJob.title}</h4>
            <div className="flex gap-2 mb-6">
              <span className="bg-blue-100 text-brand-blue text-xs font-bold px-2 py-1 rounded">{selectedJob.type}</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">{selectedJob.location}</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
              <h5 className="font-bold text-gray-800 mb-2 border-b pb-2">募集要項</h5>
              <dl className="space-y-3 text-sm">
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-gray-500 font-medium">給与</dt>
                  <dd className="col-span-2 text-gray-900 font-bold text-brand-orange">{selectedJob.salary}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-gray-500 font-medium">勤務地</dt>
                  <dd className="col-span-2 text-gray-900">{selectedJob.location}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="text-gray-500 font-medium">仕事内容</dt>
                  <dd className="col-span-2 text-gray-900 leading-relaxed">
                    身体介護（食事・入浴・排泄の介助など）<br/>
                    生活援助（掃除・洗濯・買い物など）<br/>
                    レクリエーションの企画・運営<br/>
                    ご利用者様の生活全般のサポートをお願いします。
                  </dd>
                </div>
              </dl>
            </div>
            
            <div className="flex gap-4">
              <button onClick={handleAddToFavorites} className="w-1/3 bg-white border-2 border-brand-orange text-brand-orange hover:bg-orange-50 font-bold py-3 px-4 rounded transition flex justify-center items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                キープ
              </button>
              <button onClick={handleApply} className="w-2/3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-4 rounded shadow-md transition">
                この求人に応募する
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
        type="success"
      />
    </div>
  );
}
