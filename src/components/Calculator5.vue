<script>
const calc = expr => {
  if (!expr) {
    return "";
  }
  const validCharPattern = /^[0-9.+\-*/()]+$/;
  if (!validCharPattern.test(expr)) {
    return "NaN";
  }
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
  try {
    return new Function(`return ${expr}`)();
  } catch (err) {
    console.error(err);
    return "NaN";
  }
};

export default {
  name: "Calculator5",

  data() {
    return {
      buttons: [
        [1, 2, 3, "+"],
        [4, 5, 6, "-"],
        [7, 8, 9, "*"],
        [0, ".", "=", "/"]
      ],
      expr: "" // 式
    };
  },

  methods: {
    clear() {
      this.expr = "";
    },

    click(v) {
      if (["NaN", "Infinity", "-Infinity"].includes(this.expr)) {
        this.expr = "";
      }
      if (v === "=") {
        // 計算する
        this.expr = `${calc(this.expr)}`;
        return;
      }
      this.expr = `${this.expr}${v}`;
    }
  }
};
</script>

<template>
  <div class="calc-container">
    <div class="calc-title" @click="() => clear()">
      括弧つき四則演算ができる電卓 (本気)
    </div>
    <div class="calc">
      <div class="calc-expr">
        <input readonly placeholder="0" v-model="expr" />
      </div>
      <div v-for="(row, idx) in buttons" :key="idx" class="calc-row">
        <button v-for="v in row" :key="v" @click="() => click(v)">
          {{ v }}
        </button>
      </div>
    </div>

    <div>
      <a
        href="https://github.com/daiiz/vue-calculator/blob/master/src/components/Calculator5.vue"
        target="_blank"
        rel="noopener noreferrer"
        class="ref"
      >
        ソースコードを見る
      </a>
    </div>
  </div>
</template>

<style scoped>
.calc {
  border: 2px solid rgb(64, 118, 7);
  background-color: rgba(64, 118, 7, 0.2);
}
</style>
