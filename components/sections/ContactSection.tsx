/**
 * ContactSectionコンポーネント
 * お問い合わせ・SNSリンクセクション
 */

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { MessageCircle, Instagram, Twitter } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-ocean-navy text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="お問い合わせ"
          subtitle="気になったら、まずは気軽にご連絡ください！"
          className="text-white [&_h2]:text-white [&_p]:text-gray-300"
        />

        <div className="max-w-4xl mx-auto">
          {/*
          <div className="flex justify-center gap-6 mb-12">
            {/* LINE 
            <a
              href="https://line.me/ti/p/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#06C755] hover:bg-[#05b34d] p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">公式LINE</h3>
              <p className="text-sm opacity-90">
                気軽にメッセージを<br />送ってください
              </p>
            </a>
           

            {/* Instagram 
            <a
              href="https://www.instagram.com/meio_fishing/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg w-full max-w-sm"
            >
              <Instagram className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-sm opacity-90">
                活動風景を<br />更新中
              </p>
            </a>
            */}

            {/* X (Twitter) 
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Twitter className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">X (Twitter)</h3>
              <p className="text-sm opacity-90">
                最新情報を<br />リアルタイムで
              </p>
            </a>
            
          </div>
          */}
          

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              まずは見学・体験参加から！
            </h3>
            <p className="text-gray-200 mb-6">
              見学時道具は全て無料貸出。手ぶらで気軽に参加できます。<br />
              サークルの雰囲気を確かめてから入会を決めてください。
            </p>
            <a
              href="https://www.instagram.com/meio_fishing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              DMで参加申し込み
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
