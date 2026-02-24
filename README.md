# 名桜大学フィッシングサークル 宣伝サイト

名桜大学フィッシングサークルの認知度向上および新規メンバー獲得のためのプロモーションサイト。

## プロジェクト概要

初心者でも安心して釣りを楽しめるサークルの魅力を伝え、入会へのハードルを下げることを目的としています。

## スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アイコン**: Lucide React
- **フォント**: Noto Sans JP
- **ホスティング**: Vercel

## プロジェクト構造

```
fishing_site/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ルートレイアウト（メタデータ、フォント設定）
│   ├── page.tsx             # トップページ
│   └── globals.css          # グローバルスタイル、テーマカラー定義
│
├── components/              # コンポーネント
│   ├── ui/                  # 再利用可能なUIコンポーネント
│   │   ├── Button.tsx       # ボタンコンポーネント
│   │   ├── SectionTitle.tsx # セクションタイトル
│   │   └── FeatureCard.tsx  # 特徴カード
│   │
│   └── sections/            # セクションコンポーネント
│       ├── Header.tsx       # ヘッダー（スクロール対応）
│       ├── HeroSection.tsx  # ヒーローセクション
│       ├── AboutSection.tsx # サークル紹介
│       ├── FeaturesSection.tsx # 特徴・メリット
│       ├── GallerySection.tsx  # 活動実績ギャラリー
│       ├── FAQSection.tsx   # よくある質問
│       ├── ContactSection.tsx # お問い合わせ・SNSリンク
│       └── Footer.tsx       # フッター
│
├── docs/                    # ドキュメント
│   └── COMPONENT_GUIDE.md   # コンポーネント設計ガイド
│
├── public/                  # 静的ファイル
└── package.json
```

### カラーの使用方法

Tailwindクラスで以下のように使用できます:
```tsx
<div className="bg-ocean-emerald text-ocean-navy border-ocean-sunset">
```

## 今後の拡張案

- [ ] 活動ブログ機能（Markdownベース）
- [ ] 釣り場マップ（Google Maps API使用）
- [ ] メンバー限定ページ（認証機能）
- [ ] お問い合わせフォーム（メール送信機能）
- [ ] 多言語対応（英語・中国語）

## レスポンシブ対応

すべてのコンポーネントはモバイルファーストで設計されています。

- **モバイル**: デフォルト
- **タブレット**: `md:` ブレークポイント (768px以上)
- **デスクトップ**: `lg:` ブレークポイント (1024px以上)

## トラブルシューティング

### 画像が表示されない

Next.jsの`Image`コンポーネントを使用する場合、外部URLは`next.config.ts`で許可する必要があります:

```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
```

### Tailwindのカスタムカラーが効かない

`app/globals.css`で定義したカラーが反映されない場合、開発サーバーを再起動してください。

## ライセンス

このプロジェクトは名桜大学フィッシングサークルの所有です。

## お問い合わせ

サイトに関するお問い合わせは、サークルの公式Instagramまでお願いします。

---
