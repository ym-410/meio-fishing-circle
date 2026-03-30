/**
 * GallerySectionコンポーネント
 * 活動実績の写真を表示するギャラリーセクション
 */

'use client';

// import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
// import Image from 'next/image';


export function GallerySection() {

  {/*
export const GallerySection: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      title: '大物ゲット！',
      description: '70cmのGTを釣り上げました',
      placeholder: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    },
  ];
  */}
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="活動ストーリー"
          subtitle="写真はInstagramで更新中"
        />
        {/*
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-4/3"
            >
              <Image
                src={image.placeholder}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}

        <div className="max-w-md mx-auto mt-12">
          <div className="bg-sky-50 p-8 rounded-3xl text-center shadow-xl">
            <p className="text-sky-700 font-semibold mb-5">
              活動の雰囲気はInstagramでチェック！
            </p>
            <a
              href="https://www.instagram.com/meio_fishing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[linear-gradient(135deg,_#feda75_0%,_#fa7e1e_25%,_#d62976_50%,_#962fbf_75%,_#4f5bd5_100%)] text-white rounded-3xl font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              Instagramを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
