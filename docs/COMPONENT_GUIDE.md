# コンポーネント設計ガイド

このドキュメントでは、プロジェクトのコンポーネント設計思想と保守のガイドラインを説明します。

## 設計思想

### 1. コンポーネントの分離

コンポーネントは以下のように2つの階層に分けています:

- **UIコンポーネント** (`components/ui/`): 再利用可能な汎用コンポーネント
- **セクションコンポーネント** (`components/sections/`): ページ固有のセクション

### 2. ファイル名規則

- **PascalCase**: すべてのコンポーネントファイル名 (例: `Button.tsx`, `HeroSection.tsx`)
- **説明的な命名**: ファイル名だけで役割が分かるようにする

## UIコンポーネント

### Button.tsx

**目的**: 統一されたボタンスタイルを提供

**Props**:
```typescript
interface ButtonProps {
  children: React.ReactNode;    // ボタンのテキスト
  variant?: 'primary' | 'secondary' | 'outline';  // スタイルバリエーション
  href?: string;                // リンクの場合のURL
  onClick?: () => void;         // クリックハンドラー
  className?: string;           // 追加のCSSクラス
}
```

**使用例**:
```tsx
<Button variant="primary" href="#contact">
  お問い合わせ
</Button>
```

### SectionTitle.tsx

**目的**: セクションのタイトルを統一的に表示

**Props**:
```typescript
interface SectionTitleProps {
  title: string;       // メインタイトル
  subtitle?: string;   // サブタイトル（オプション）
  className?: string;  // 追加のCSSクラス
}
```

**使用例**:
```tsx
<SectionTitle
  title="サークル紹介"
  subtitle="初心者大歓迎のフィッシングサークル"
/>
```

### FeatureCard.tsx

**目的**: サークルの特徴を統一フォーマットで表示

**Props**:
```typescript
interface FeatureCardProps {
  icon: LucideIcon;      // アイコンコンポーネント
  title: string;         // カードタイトル
  description: string;   // 説明文
}
```

**使用例**:
```tsx
<FeatureCard
  icon={Gift}
  title="道具の無料貸出"
  description="釣り竿やリールを無料で貸し出します"
/>
```

## セクションコンポーネント

### Header.tsx

**機能**:
- スクロール時の背景色変更
- モバイルメニュー対応
- スムーズスクロールナビゲーション

**編集ポイント**:
```tsx
const navItems = [
  { label: 'About', href: '#about' },
  // ナビゲーション項目を追加
];
```

### HeroSection.tsx

**機能**:
- ファーストビューのインパクト
- アニメーション効果
- CTAボタン

**カスタマイズ**:
- キャッチコピーを変更: `<h1>`タグ内のテキスト
- 背景グラデーションを変更: `bg-gradient-to-br` のクラス

### AboutSection.tsx

**機能**:
- サークルの基本情報表示
- メンバー構成、活動理念、活動内容

**編集ポイント**:
- 数値データ（メンバー数、男女比など）
- 説明文

### FeaturesSection.tsx

**機能**:
- サークルの特徴を6つのカードで表示
- Lucideアイコンを使用

**カードの追加方法**:
```tsx
const features = [
  {
    icon: Gift,  // lucide-reactからインポート
    title: 'タイトル',
    description: '説明文',
  },
  // 新しい特徴を追加
];
```

### GallerySection.tsx

**機能**:
- 活動写真のグリッド表示
- ホバー時の説明表示
- Next.js Image最適化

**画像の追加**:
```tsx
const galleryImages = [
  {
    id: 1,
    title: '写真のタイトル',
    description: '説明',
    placeholder: '/images/photo1.jpg',  // public/内のパス
  },
];
```

**注意**: 外部URL使用時は`next.config.ts`で許可が必要

### FAQSection.tsx

**機能**:
- アコーディオン形式のFAQ
- クリックで開閉

**FAQの追加**:
```tsx
const faqs: FAQItem[] = [
  {
    question: '質問内容',
    answer: '回答内容',
  },
];
```

### ContactSection.tsx

**機能**:
- SNSリンク（LINE、Instagram、X）
- CTAボタン

**SNSリンクの変更**:
各SNSボタンの`href`属性を実際のリンクに変更してください。

### Footer.tsx

**機能**:
- サイトのフッター情報
- ナビゲーションリンク

## スタイリングガイドライン

### Tailwindクラスの使用

**推奨**:
```tsx
<div className="bg-ocean-emerald text-white p-6 rounded-lg">
```

**非推奨**:
```tsx
<div style={{ backgroundColor: '#10b981' }}>  // インラインスタイルは避ける
```

### カスタムカラーの使用

`app/globals.css`で定義された色を使用:
- `bg-ocean-emerald` / `text-ocean-emerald`
- `bg-ocean-navy` / `text-ocean-navy`
- `bg-ocean-sunset` / `text-ocean-sunset`

### レスポンシブデザイン

モバイルファーストで設計:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* モバイル: 1列、タブレット: 2列、デスクトップ: 3列 */}
</div>
```

## 状態管理

### クライアントコンポーネント

状態を使用するコンポーネントには`'use client'`ディレクティブが必要:

```tsx
'use client';

import { useState } from 'react';

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ...
};
```

**使用例**:
- `Header.tsx`: スクロール位置、メニュー開閉状態
- `FAQSection.tsx`: アコーディオンの開閉状態

## パフォーマンス最適化

### 画像の最適化

Next.jsの`Image`コンポーネントを使用:
```tsx
import Image from 'next/image';

<Image
  src="/images/photo.jpg"
  alt="説明"
  width={800}
  height={600}
  // または fill プロパティで親要素に合わせる
/>
```

### コンポーネントの遅延読み込み

必要に応じて動的インポートを使用:
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'));
```

## アクセシビリティ

### セマンティックHTML

適切なHTMLタグを使用:
```tsx
<header>  // ヘッダー
<main>    // メインコンテンツ
<section> // セクション
<footer>  // フッター
```

### alt属性

すべての画像に`alt`属性を設定:
```tsx
<Image src="..." alt="活動風景の写真" />
```

### ARIAラベル

必要に応じてARIA属性を追加:
```tsx
<button aria-label="メニューを開く">
  <Menu />
</button>
```

## 保守性のベストプラクティス

1. **コメントの追加**: 各ファイルの先頭にコンポーネントの目的を記載
2. **型定義**: PropsにTypeScriptの型を定義
3. **定数の分離**: ハードコードされた値は配列やオブジェクトに
4. **コンポーネントの分割**: 100行を超えたら分割を検討
5. **命名規則の統一**: 変数名、関数名は説明的に

## トラブルシューティング

### よくあるエラー

**エラー**: `'use client' directive must be at the top`

**解決**: ファイルの最初の行に`'use client';`を配置

**エラー**: `Invalid src prop on next/image`

**解決**: `next.config.ts`で外部ドメインを許可

---

質問があれば、このドキュメントを更新していってください！
