<template>
  <div>
    <div class="title">
      <h1>電卓づくり 補助資料</h1>
      <p>
        電卓の作例を眺めながら<a
          href="https://ja.vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          >Vue.js</a
        >の基本的な使い方を振り返ろう！<br />
        このページ自体もvue-routerを使ったウェブページの一例になっています。<a
          href="https://github.com/daiiz/vue-calculator"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >でコードを公開しています。
      </p>
      <p>
        他のおもしろい解き方を見つけたら、ぜひPull Requestで自慢してください！！
      </p>
    </div>
    <h2>Basic</h2>
    <div class="gdesc">
      逐次計算方式の例です。途中式を記憶しておく必要がないので考えやすかったですね！
    </div>
    <ul>
      <li class="demo">
        <router-link to="/calc1" class="a">シンプルな電卓</router-link>
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
          <li>
            <b>学習ポイント</b>: Vueのdata, イベントハンドラ @click
            を使いこなせる
          </li>
        </ul>
      </li>
      <li class="demo">
        <router-link to="/calc2" class="a">シンプルな電卓の改良</router-link>
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
        <router-link to="/calc3" class="a">
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
            ついでにボタンの描画をv-forを使ってきれいに書いてみる
          </li>
          <li>
            <b>学習ポイント</b>:
            Vueのv-forを使いこなせる。第三者が提供するnpmライブラリを導入できる。
          </li>
        </ul>
      </li>
    </ul>
    <h2>Standard</h2>
    <div class="gdesc">
      入力式をすべて受け取ってから計算する方針の例です。乗除の優先など、計算順序を意識する必要がでてきて急に難しくなります。StandardとAdvancedの中間くらいでいい具合の難易度の実装はあるだろうか？
    </div>
    <ul>
      <li class="demo">
        <router-link to="/calc4" class="a"
          >四則演算ができる電卓 (気楽)</router-link
        >
        <ul class="desc">
          <li>逐次計算方式を卒業する</li>
          <li>
            途中式をすべて文字列として保持しておき、「=」が入力された時点で計算する
          </li>
          <li>
            まずは雰囲気を掴むために、非推奨な手法だが
            <code>new Function()</code>
            を用いて、関数内部に与えた文字列をそのまま評価させる方針で実装してみる。計算をブラウザのJavaScriptエンジンに任せることで、四則演算の優先順序などを気にする必要がない。
          </li>
          <li>
            類似手法として、もっと非推奨だが、<code>eval()</code>
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
    <div class="gdesc">
      <b>大学レベルです。</b
      >本気で電卓に臨むとここまでできるぞ！という一例です。Vue.js入門の域は確実に超えています。考え方こそ難しいですが、実はこれまでの例で最もシンプルに書けているはずです。
    </div>
    <ul>
      <li class="demo">
        <router-link to="/calc5" class="a"
          >括弧つき四則演算ができる電卓 (本気)</router-link
        >
        <ul class="desc">
          <li>
            入力された式の<b>構文解析</b>を行い、小さく分割された数式のパーツごとに再帰的に計算していく手法
          </li>
          <li>
            ①
            四則演算の計算の優先順序などを反映させた解析ルールを定義する。これは
            <a
              href="https://ja.wikipedia.org/wiki/バッカス・ナウア記法"
              target="_blank"
              rel="noopener noreferrer"
              ><b>BNF</b> (バッカス・ナウア記法)</a
            >
            などと呼ばれる。今回の定義は次のようになる。数式をexpr, term,
            factor,
            numberという4つの構成に分解して考えられる。<code>[]*</code>は0回以上の繰り返し、<code>[]+</code>は1回以上の繰り返しを表す。
            <ul>
              <pre>
expr := term [ ("+" | "-") term ]*
term := factor [ ("*" | "/") factor ]*
factor := number | "(" expr ")"
number := [0-9.]+</pre
              >
            </ul>
          </li>
          <li>
            ②
            定義された各パーツを実装していく。部分的に答えを求めて最終的に全てを組み上げる方法で計算される。正しくコードを書けば、乗除や括弧つきの部分の解決が優先されるような自然な数式計算ができる。
          </li>
          <li>
            <b>学習ポイント</b>: 検索してみよう: 構文解析, BNF, EBNF, 再帰
            <br />
            <a
              href="https://www.google.com/search?q=再帰"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style="max-width: 100%;"
                width="500"
                src="https://gyazo.com/196e2249eafa56cff5a97d51a4473a77/thumb/1200"
              />
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <footer>
      2023-02-25 だいず
    </footer>
  </div>
</template>
