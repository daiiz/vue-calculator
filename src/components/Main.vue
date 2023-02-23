<template>
  <div>
    <h2>Basic</h2>
    <ul>
      <li class="demo">
        <router-link to="/calc1">シンプルな電卓</router-link>
        <ul class="desc">
          <li>深く考えずに素直に書いてみる</li>
          <li>
            二個目の演算子が入力された時点で逐次計算することにより、計算順序を意識しなくてすむ
          </li>
          <li>
            基本的に最新の計算結果の値
            <code>val</code> を一つだけ保持しておけばよい
          </li>
          <li>簡単化のため、キーボードでの入力は受け付けない</li>
          <li>実際に書いてみると、意外と考えることが多い</li>
          <li><b>学習ポイント</b>: Vueのdataを使いこなせる</li>
        </ul>
      </li>
      <li class="demo">
        <router-link to="/calc2">シンプルな電卓の改良</router-link>
        <ul class="desc">
          <li>逐次計算する方針は引き継ぐ</li>
          <li>
            入力文字列を単に結合して一つの値として保持するのではなく、
            <code>leftNum (数値), op (演算子), rightNum (数値)</code>
            の組を意識して配列値 <code>toks</code> として格納しておく
          </li>
          <li>途中式の解釈が楽になったので、小数の入力にも対応した</li>
          <li><b>学習ポイント</b>: Vueのdataとcomputedを使いこなせる</li>
        </ul>
      </li>
      <li class="demo">
        <router-link to="/calc3">
          シンプルな電卓の改良＋丸め誤差への対応
        </router-link>
        <ul class="desc">
          <li>
            <code>1.1 * 1.1</code> の計算結果が
            <code>1.2100000000000002</code> のようになってしまう現象に対応する
          </li>
          <li>
            参考:
            <a
              href="https://typescriptbook.jp/reference/values-types-variables/number/decimal-calculation-error"
              target="_blank"
              rel="noopener noreferrer"
              >小数計算の誤差 - サバイバルTypeScript</a
            >
          </li>
          <li>
            今回は
            <a
              href="https://github.com/MikeMcl/bignumber.js/"
              target="_blank"
              rel="noopener noreferrer"
              >bignumber.js</a
            >
            というライブラリを使って解決した
          </li>
          <li>
            <b>学習ポイント</b>: 第三者が提供するnpmライブラリを導入できる
          </li>
        </ul>
      </li>
    </ul>
    <h2>Standard</h2>
    <ul>
      <li class="demo">
        <router-link to="/calc4"
          >括弧つき四則演算ができる電卓 (気楽)</router-link
        >
        <ul class="desc">
          <li>逐次計算方式を卒業する</li>
          <li>
            途中式をすべて文字列として保持しておき、「=」が入力された時点で計算する
          </li>
          <li>
            まずは雰囲気を掴むために、非推奨な手法ではあるが
            <code>new Function()</code>
            を用いて、関数内部に与えた文字列をそのまま評価させる方法で実装してみる
          </li>
          <li>
            類似手法として、もっと非推奨ですが、<code>eval()</code>
            関数を用いるアイデアもある
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/ja/docs/orphaned/Web"
              target="_blank"
              rel="noopener noreferrer"
              >MDN</a
            >などのドキュメントで、なぜこれらが非推奨なのかを調べてみよう。また、両者の違いはなんだろうか？
          </li>
          <li>
            <b>学習ポイント</b>: MDNのドキュメントでJavaScriptの仕様を調査できる
          </li>
        </ul>
      </li>
    </ul>
    <h2>Advanced</h2>
    <ul>
      <li class="demo">
        <router-link to="/calc4"
          >括弧つき四則演算ができる電卓 (本気)</router-link
        >
        <ul class="desc">
          <li>大学レベルです</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
