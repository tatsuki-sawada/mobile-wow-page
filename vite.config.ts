import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mobile-wow-page/', // GitHub Pages用。リポジトリ名に置き換えてください
  plugins: [react()],
  server: {
    open: false, // 自動でブラウザを開かない
    cors: true,  // CORS有効化（必要に応じて調整）
    strictPort: true, // ポート競合時にエラー
    https: false, // ローカル開発時はhttpのみ
    fs: {
      strict: true, // プロジェクト外のファイルアクセス禁止
    },
  },
  build: {
    outDir: 'docs', // github pages の読み取り可なのフォルダ名
    sourcemap: false, // 本番ビルドでソースマップ無効化
    minify: 'esbuild', // 高速なminify
  },
})
