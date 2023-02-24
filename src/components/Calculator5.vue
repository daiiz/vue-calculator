<script>
const BigNumber = require("bignumber.js");

// 本質ここから
/** BNF記法での四則演算の定義
 * `[]*`は0回以上、`[]+`は1回以上の繰り返しを表す
 *
 * <expr> := <term> [ ("+" | "-") <term> ]*
 * <term> := <factor> [ ("*" | "/") <factor> ]*
 * <factor> := <number> | "(" <expr> ")"
 * <number> := [0-9.]+
 **/

const expr = (s, pos) => {
  let v = term(s, pos);
  while (s[pos.i] === "+" || s[pos.i] === "-") {
    const op = s[pos.i];
    pos.i++;
    const v2 = term(s, pos);
    v =
      op === "+"
        ? new BigNumber(v).plus(new BigNumber(v2))
        : new BigNumber(v).minus(new BigNumber(v2));
  }
  return Number(v);
};

const term = (s, pos) => {
  let v = factor(s, pos);
  while (s[pos.i] === "*" || s[pos.i] === "/") {
    const op = s[pos.i];
    pos.i++;
    const v2 = factor(s, pos);
    v =
      op === "*"
        ? new BigNumber(v).multipliedBy(new BigNumber(v2))
        : new BigNumber(v).dividedBy(new BigNumber(v2));
  }
  return Number(v);
};

const factor = (s, pos) => {
  if (s[pos.i] === "(") {
    pos.i++;
    const v = expr(s, pos);
    pos.i++;
    return v;
  }
  return number(s, pos);
};

const number = (s, pos) => {
  let integer = 0;
  let decimal = 0;
  while (s[pos.i] >= "0" && s[pos.i] <= "9") {
    integer = integer * 10 + Number(s[pos.i++]);
  }
  if (s[pos.i] === ".") {
    pos.i++;
    let d = 0.1;
    while (s[pos.i] >= "0" && s[pos.i] <= "9") {
      decimal += Number(s[pos.i++]) * d;
      d /= 10;
    }
  }
  const v = integer + decimal;
  console.log("number:", v);
  return v;
};

// 本質ここまで

const calc = s => {
  if (!expr) {
    return "";
  }
  // 構文解析位置を示すiは参照渡しすることに注意
  return expr(s, { i: 0 });
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
      expr: "1+2*6/(10-7)" // 式
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
        const ans = calc(this.expr);
        console.log(this.expr + "=", ans);
        this.expr = `${ans}`;
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
      <div class="calc-row">
        <button @click="() => click('(')">(</button>
        <button @click="() => click(')')">)</button>
        <div class="space"></div>
        <button @click="clear" style="color: #D84D57">C</button>
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
