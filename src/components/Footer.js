import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-0 relative mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-10 relative z-10">
          
          {/* Column 1: Prefecture Logos & Info */}
          <div className="flex flex-col lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-brand-green shadow-sm shrink-0">
                 <span className="text-brand-green font-bold text-[10px]">県ロゴ</span>
               </div>
               <div>
                 <span className="font-bold text-lg tracking-wider text-gray-700">サンプル県</span>
                 <span className="block text-[10px] text-brand-orange mt-0.5 tracking-widest">Sample Prefecture</span>
               </div>
            </div>
            
            <p className="text-sm font-bold text-gray-700 mb-4">主催：サンプル県福祉部高齢者福祉課</p>
            
            <div className="bg-gray-100 p-4 text-xs text-gray-600 leading-relaxed">
              サンプル県介護人材確保総合推進事業<br/>
              サンプル県介護職員就業定着支援事業<br/>
              サンプル県介護職員キャリアアップ研修事業
            </div>
          </div>

          {/* Column 2: Portal Logo & Company Info */}
          <div className="flex flex-col lg:col-span-4">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 border-2 border-brand-orange shadow-sm shrink-0">
                <span className="text-brand-orange font-bold text-[10px]">ロゴ</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 mb-0.5 block tracking-wide font-medium">サンプル県の介護のお仕事応援ポータルサイト</span>
                <h2 className="text-lg font-extrabold tracking-wider text-brand-orange">SAMPLE KAIGO PORTAL</h2>
              </div>
            </div>
            
            <p className="text-gray-600 text-xs mb-3">運営：株式会社サンプルライフケア</p>
            
            <div className="flex items-center text-gray-800 mb-1">
              <svg className="w-7 h-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="font-extrabold text-3xl tracking-wider">0120-121-767</span>
            </div>
            <p className="text-[10px] text-gray-500 mb-8">受付時間 9:00-17:00 （土日祝・年末年始を除く）</p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
              <Link href="#" className="hover:text-brand-orange transition">プライバシーポリシー</Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="hover:text-brand-orange transition">ウェブアクセシビリティ方針</Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="hover:text-brand-orange transition">ドメイン設定受信について</Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="hover:text-brand-orange transition">サイトマップ</Link>
            </div>
          </div>

          {/* Column 3: Contact Box */}
          <div className="flex flex-col lg:col-span-4 mb-20 lg:mb-[320px] relative z-20">
            <div className="bg-gray-600 text-white text-xs py-1 px-4 rounded-md inline-flex items-center self-start mb-4 shadow-sm">
              <svg className="w-3.5 h-3.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              お問い合わせ
            </div>
            
            <div className="text-gray-600 text-xs mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              sample-kaigo@sample-lc.co.jp
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              〒000-0001<br/>
              サンプル県サンプル市中央区上落合1-2-3（受付5階）
            </p>
          </div>
        </div>

      </div>

      {/* Floating Bottom Right Image - Z-index 50 to sit on top of everything including bottom bar */}
      <div className="absolute bottom-0 right-0 w-[250px] h-[300px] lg:w-[320px] lg:h-[380px] xl:w-[380px] xl:h-[450px] pointer-events-none z-50">
        <div className="relative w-full h-full drop-shadow-sm">
           <Image 
            src="/images/footer_transparent_real.png" 
            alt="Caregiver and elderly" 
            fill 
            className="object-contain object-bottom"
           />
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-gray-100 py-4 border-t border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="tracking-widest text-[10px] text-gray-500">Copyright (C) Sample Prefecture. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
