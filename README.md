# プロフィール作成

## 修正点、変更点
viteの導入  
main.tsにフォロー、フォロー解除のイベントの追加  
followするときに1/10の確率でフォロー数が+10になるような遊び心を追加  
## 学んだこと
- CSS
flexbox で要素をいい感じに並べる  
flexbox は親要素直下の子要素たちに対してのみに適用される  
要素:hoverで何かのアクションがあった要素に対してのエフェクトをつけれる  
transition で疑似要素に移行するまでの時間とかを決めれる  
リストの箇条書きを消して中央揃えにするにはul要素に対してlist-style-type:none;、padding:0;にして箇条書き余白を消す  
- TypeScript
npm init -y これでpackeg.jsonがインストールされる
npm install -D typescript viteで必要なnode_modulesがインストールされる　これは容量がでかいから.gitignoreに必ず入れる
npx tsc --init typescriptの必要なルールが作成される
npx vite これで実行できる
## 所感
viteはtsのままhtmlに反映させれてめっちゃ楽になる  
tsは基礎文法しかしてないからイベント処理に手間取った  
## 参照
画像はgeminiで作成