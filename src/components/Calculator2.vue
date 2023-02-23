<script>
const opPattern = /[\+\-\*\/]/;

const calc = expr => {
  const toks = expr
    .split(new RegExp("(" + opPattern.source + ")"))
    .map(v => v.trim())
    .filter(v => !!v);

  let op, a, b;
  if (toks.length === 3) {
    // 例: toks: ["1", "+", "2"]
    op = toks[1];
    a = Number(toks[0]);
    b = Number(toks[2]);
  } else if (toks.length === 4) {
    const headChar = toks[0];
    if (opPattern.test(headChar)) {
      // 例: toks: ["-", "1", "+", "2"]
      op = toks[2];
      a = Number(toks[0] + toks[1]);
      b = Number(toks[3]);
    } else {
      // 例: toks: ["6", "*", "-", "3"]
      op = toks[1];
      a = Number(toks[0]);
      b = Number(toks[2] + toks[3]);
    }
  } else if (toks.length === 5) {
    // 例: toks: ["-", "6", "/", "-", "3"]
    op = toks[2];
    a = Number(toks[0] + toks[1]);
    b = Number(toks[3] + toks[4]);
  }

  if (a === undefined || b === undefined || op === undefined) {
    return expr;
  }

  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }

  return expr;
};

export default {
  name: "Calculator1",

  data() {
    return {
      val: ""
    };
  },

  methods: {
    clear() {
      this.val = "";
    },
    click(v) {
      if (["NaN", "Infinity", "-Infinity"].includes(this.val)) {
        this.val = "";
      }

      if (this.val === "") {
        if (opPattern.test(v) && v !== "-") {
          return;
        }
      }

      if (v === 0 && ["", "0"].includes(this.val)) {
        this.val = "0";
      } else if (v === "=") {
        // 計算する
        this.val = `${calc(this.val)}`;
      } else if (opPattern.test(v)) {
        const lastChar = this.val[this.val.length - 1];
        if (opPattern.test(lastChar)) {
          if (v === "-" && !["+", "-"].includes(lastChar)) {
            // 文字列結合する
            this.val += `${v}`;
          } else {
            // 演算子を連続で入力させない
            return;
          }
        } else if (opPattern.test(this.val)) {
          // 計算する
          this.val = `${calc(this.val)}${v}`;
        } else {
          // 文字列結合する
          this.val += `${v}`;
        }
      } else {
        // 文字列結合する
        this.val += `${v}`;
        this.val = this.val.replace(/^00+/, "0");
      }
    }
  }
};
</script>

<template>
  <div class="calc-container">
    <div class="calc-title" @click="clear">シンプルな電卓の改良</div>
    <div class="calc">
      <div class="calc-expr">
        <input readonly placeholder="0" :value="val" />
      </div>
      <div class="calc-row">
        <button @click="() => click(1)">1</button>
        <button @click="() => click(2)">2</button>
        <button @click="() => click(3)">3</button>
        <button @click="() => click('+')">+</button>
      </div>
      <div class="calc-row">
        <button @click="() => click(4)">4</button>
        <button @click="() => click(5)">5</button>
        <button @click="() => click(6)">6</button>
        <button @click="() => click('-')">-</button>
      </div>
      <div class="calc-row">
        <button @click="() => click(7)">7</button>
        <button @click="() => click(8)">8</button>
        <button @click="() => click(9)">9</button>
        <button @click="() => click('*')">*</button>
      </div>
      <div class="calc-row">
        <button @click="() => click(0)" style="width: calc(50% + 8px)">
          0
        </button>
        <button @click="() => click('=')">=</button>
        <button @click="() => click('/')">/</button>
      </div>
    </div>

    <div>
      <a
        href="https://github.com/daiiz/vue-calculator/blob/master/src/components/Calculator2.vue"
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
  border: 2px solid rgb(118, 64, 7);
  background-color: rgba(118, 64, 7, 0.2);
}
</style>
