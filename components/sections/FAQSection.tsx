/**
 * FAQSectionコンポーネント
 * よくある質問セクション
 */

'use client';

import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: '費用はどのくらいかかりますか?',
      answer: 'サークル会費はかかりません！(2026年2月現在) 活動時の交通費や餌代などは別途実費となります（1回の釣行で0円-1,000円程度）。',
    },
    {
      question: '車がなくても参加できますか?',
      answer: 'はい、大丈夫です！車を持っているメンバーで乗り合わせて釣り場まで送迎します。ガソリン代は参加者で割り勘にしています。',
    },
    {
      question: '女子でも入れますか?',
      answer: 'もちろんです！現在の男女比は3:1で、女性メンバーも在籍しています！',
    },
    {
      question: '釣りが全くの初めてでも大丈夫ですか?',
      answer: '全く問題ありません！昨年はメンバーの半数が未経験からスタートしています。先輩が基礎から丁寧に教えますし、道具の使い方から釣り方まで、しっかりサポートします。',
    },
    {
      question: '活動頻度はどのくらいですか?',
      answer: '基本的に月に1回程度活動していますが、参加は自由です。授業やバイトの予定に合わせて、都合の良い時に参加できます。強制参加の活動はありません。',
    },
    {
      question: 'どんな魚が釣れますか?',
      answer: '沖縄の海なので、GT（ロウニンアジ）、タマン（ハマフエフキ）、ミーバイ（ハタ類）など、カラフルな熱帯魚が釣れます。季節によって釣れる魚も変わるので、1年中楽しめます！',
    },
    {
      question: '見学や体験参加はできますか?',
      answer: 'もちろんです！まずは見学や体験参加で雰囲気を確かめてください。公式InstagramのDMからお気軽にご連絡ください。',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="よくある質問"
          subtitle="気になる疑問にお答えします"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-ocean-navy pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-ocean-emerald shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
