<script>
export default {
  name: "Calculator1",

  data() {
    return {
      currentValue: ""
    };
  },

  methods: {
    click(e) {
      console.log(e);
    }
  }
};
</script>

<template>
  <div class="calc-container">
    <div class="calc-title">シンプルな電卓</div>
    <div class="calc">
      <div class="calc-expr">
        <input readonly placeholder="0" />
      </div>
      <div class="calc-row">
        <button @click="e => click(1)">1</button>
        <button @click="e => click(2)">2</button>
        <button @click="e => click(3)">3</button>
        <button @click="e => click('+')">+</button>
      </div>
      <div class="calc-row">
        <button @click="e => click(4)">4</button>
        <button @click="e => click(5)">5</button>
        <button @click="e => click(6)">6</button>
        <button @click="e => click('-')">-</button>
      </div>
      <div class="calc-row">
        <button @click="e => click(7)">7</button>
        <button @click="e => click(8)">8</button>
        <button @click="e => click(9)">9</button>
        <button @click="e => click('*')">*</button>
      </div>
      <div class="calc-row">
        <button @click="e => click(0)">0</button>
        <button @click="e => click('.')">.</button>
        <button @click="e => click('=')">=</button>
        <button @click="e => click('/')">/</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
