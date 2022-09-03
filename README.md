# mixjuice-test
 
[MixJuice](http://mixjuice.shizentai.jp/)や、[IchigoJam web](https://fukuno.jig.jp/app/IchigoJam/)のMixJuiceシミュレーターと接続するテスト用サーバープログラム

## 環境準備

1. MixJuiceからアクセスでき環境を準備する
2. [Deno](https://deno.land)をインストール
3. 下記を動かす

## 疎通確認用 simple

```
deno run -A https://ichigojam.github.io/mixjuice-test/simple.js
```
- IchigoJam から、サーバーに対して、MJ GET / MJ POST してみる
- IchigoJam web では、非SSLに接続できないため、MJ GETS や MJ POSTS を使う
