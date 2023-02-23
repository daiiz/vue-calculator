<template>
  <div>
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
        </ul>
      </li>
    </ul>
  </div>
</template>
