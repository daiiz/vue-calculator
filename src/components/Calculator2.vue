<script>
const opPattern = /[\+\-\*\/]/;

const calc = (leftNum, op, rightNum) => {
  const a = Number(leftNum);
  const b = Number(rightNum);
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
  throw new Error("Invalid op: " + op);
};

export default {
  name: "Calculator2",

  data() {
    return {
      toks: ["", "", ""]
    };
  },

  computed: {
    expr: {
      get() {
        return this.toks.join("");
      }
    }
  },

  methods: {
    getCurrentTok() {
      const arr = this.toks.filter(v => !!v);
      if (arr.length === 0) {
        return ["", 0];
      }
      const cTokIdx = arr.length - 1;
      const cTok = arr[cTokIdx];
      return [cTok, cTokIdx];
    },
    setToks(leftNum = "", op = "", rightNum = "") {
      this.$set(this.toks, 0, leftNum);
      this.$set(this.toks, 1, op);
      this.$set(this.toks, 2, rightNum);
    },
    click(v) {
      const headTok = this.toks[0];
      if (["NaN", "Infinity", "-Infinity"].includes(headTok)) {
        this.setToks();
      }

      const [tok, idx] = this.getCurrentTok();
      if (opPattern.test(v) || v === "=") {
        if (idx === 2) {
          // 計算する
          const nextLeftNum = calc(this.toks[0], this.toks[1], this.toks[2]);
          const nextOp = v === "=" ? "" : v;
          this.setToks(`${nextLeftNum}`, nextOp, "");
          return;
        }
        if (v === "=") {
          return;
        }
        if (v === "-") {
          // rightNumとして負数を与える
          if (idx === 0 && tok === "") {
            this.$set(this.toks, idx, v);
            return;
          } else if (
            idx === 1 &&
            !["+", "-"].includes(tok) &&
            opPattern.test(tok)
          ) {
            this.$set(this.toks, idx + 1, v);
            return;
          }
        }
        if (idx === 1) {
          // 演算子を上書きする
          this.$set(this.toks, idx, v);
        } else if (idx === 0 && /[0-9]$/.test(tok)) {
          // 演算子としての「-」を与える
          this.$set(this.toks, idx + 1, v);
        }
      } else {
        // 文字列結合する
        const tIdx = idx === 1 ? idx + 1 : idx;
        const tVal = idx === 1 ? `${v}` : `${tok}${v}`;
        this.$set(this.toks, tIdx, tVal.replace(/^00+/, "0"));
      }
    }
  }
};
</script>

<template>
  <div class="calc-container">
    <div class="calc-title" @click="() => setToks()">
      シンプルな電卓の改良
    </div>
    <div class="calc">
      <div class="calc-expr">
        <input readonly placeholder="0" v-model="expr" />
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
