import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";

import Calculator1 from "@/components/Calculator1";
import Calculator2 from "@/components/Calculator2";
import Calculator3 from "@/components/Calculator3";
import Calculator4 from "@/components/Calculator4";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/calc1",
      name: "Calc1",
      component: Calculator1
    },
    {
      path: "/calc2",
      name: "Calc2",
      component: Calculator2
    },
    {
      path: "/calc3",
      name: "Calc3",
      component: Calculator3
    },
    {
      path: "/calc4",
      name: "Calc4",
      component: Calculator4
    }
  ]
});
