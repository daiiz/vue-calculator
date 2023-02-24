<script>
/** BNF記法での四則演算の定義
 * `[]*`は0回以上、`[]+`は1回以上の繰り返しを表す
 *
 * <expr> := <term> [ ("+" | "-") <term> ]*
 * <term> := <factor> [ ("*" | "/") <factor> ]*
 * <factor> := <number> | "(" <expr> ")"
 * <number> := [0-9]+
 **/

const expr = (s, pos) => {
  let v = term(s, pos);
  while (s[pos.i] === "+" || s[pos.i] === "-") {
    const op = s[pos.i];
    pos.i++;
    const v2 = term(s, pos);
    v = op === "+" ? v + v2 : v - v2;
  }
  return v;
};

const term = (s, pos) => {
  let v = factor(s, pos);
  while (s[pos.i] === "*" || s[pos.i] === "/") {
    const op = s[pos.i];
    pos.i++;
    const v2 = factor(s, pos);
    v = op === "*" ? v * v2 : v / v2;
  }
  return v;
};

const factor = (s, pos) => {
  // if (s[pos.i] >= "0" && s[pos.i] <= "9") {
  //   return number(s, pos);
  // }
  if (s[pos.i] === "(") {
    pos.i++;
    const v = expr(s, pos);
    pos.i++;
    return v;
  }
  return number(s, pos);
};

const number = (s, pos) => {
  let v = 0;
  while (s[pos.i] >= "0" && s[pos.i] <= "9") {
    v = v * 10 + Number(s[pos.i++]);
  }
  return v;
};

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
        // 解析位置は参照渡しすることに注意
        const ans = expr(this.expr, { i: 0 });
        console.log(this.expr, ans);
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
