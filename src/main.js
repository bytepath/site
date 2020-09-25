import Vue from 'vue'
import HomePage from "./components/homepage/HomePage";

// Basic Transformations
import VectorRect from "./components/Guide/VectorRect";
import VectorRectProps from "./components/Guide/VectorRectProps";
import VectorRectScaleProps from "./components/Guide/VectorRectScaleProps";
import VectorRectRotateProps from "./components/Guide/VectorRectRotateProps";
import VectorRectWHProps from "./components/Guide/VectorRectWHProps";

// Timers
import UsingScrollTimer from "./components/Guide/Timers/UsingScrollTimer";
import UsingClockTimer from "./components/Guide/Timers/UsingClocklTimer";

// Animated Transformations
import AnimatedRotation from "./components/Guide/AnimatedTransformations/AnimatedRotation";
import AnimatedScale from "./components/Guide/AnimatedTransformations/AnimatedScale";
import AnimatedTranslation from "./components/Guide/AnimatedTransformations/AnimatedTranslation";

let components = {
    "homepage": HomePage,
    "vector-rect": VectorRect,
    "vector-rect-xy-props": VectorRectProps,
    "vector-rect-scale-props": VectorRectScaleProps,
    "vector-rect-rotate-props": VectorRectRotateProps,
    "vector-wh-props": VectorRectWHProps,
    'using-scroll': UsingScrollTimer,
    'using-clock': UsingClockTimer,
    'anim-trans': AnimatedTranslation,
    'anim-rotate': AnimatedRotation,
    'anim-scale': AnimatedScale,
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
