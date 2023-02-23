<template>
  <div>
    <ul>
      <li>
        <router-link to="/calc1">シンプルな電卓</router-link>
        <ul class="desc">
          <li>深く考えずに素直に書いてみる</li>
          <li>
            二個目の演算子が入力された時点で逐次計算することにより、計算順序を意識しなくてすむ
          </li>
          <li>基本的に最新の計算結果の値を一つだけ保持しておけばよい</li>
          <li>簡単化のため、キーボードでの入力は受け付けない</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
