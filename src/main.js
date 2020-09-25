import Vue from 'vue'
import HomePage from "./components/homepage/HomePage";
import VectorRect from "./components/Guide/VectorRect";
import VectorRectProps from "./components/Guide/VectorRectProps";
import VectorRectScaleProps from "./components/Guide/VectorRectScaleProps";
import VectorRectRotateProps from "./components/Guide/VectorRectRotateProps";

let components = {
    "homepage": HomePage,
    "vector-rect": VectorRect,
    "vector-rect-xy-props": VectorRectProps,
    "vector-rect-scale-props": VectorRectScaleProps,
    "vector-rect-rotate-props": VectorRectRotateProps,
};

Object.entries(components).map((item) => {
    Vue.component(item[0], item[1]);
});

Vue.config.productionTip = false

// eslint-disable-next-line
// var VUEAPP = new Vue({
//   render: h => h(App),
// })
window.vueapp = Vue;
