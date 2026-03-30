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
      answer: '会費はなし。エサ代や道具代はかかります。',
    },
    {
      question: '車がなくても参加できますか?',
      answer: '参加できます。乗り合わせで海まで行きます。',
    },
    {
      question: '女子でも入れますか?',
      answer: 'もちろんOK。性別問わず歓迎です。',
    },
    {
      question: '釣りが全くの初めてでも大丈夫ですか?',
      answer: '大丈夫。未経験スタートの人が多いです。',
    },
    {
      question: '活動頻度はどのくらいですか?',
      answer: 'だいたい月1。来られる日だけでOKです。',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-sky-50/60">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="よくある質問"
          subtitle="気になることだけ、サクッと。"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-sky-50 transition-colors duration-200"
              >
                <span className="font-bold text-sky-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 font-semibold">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
