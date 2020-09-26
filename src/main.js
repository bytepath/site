import Vue from 'vue'
import HomePage from "./components/homepage/HomePage";
import App from "./App";


// Introduction
import VectorRect from "./components/Guide/Introduction/Rectangle";
import ComponentBasedAssets from "./components/Guide/Introduction/ComponentBasedAssets";
import BalloonSample from "./components/Guide/Introduction/BalloonSample";
import AssetComposition from "./components/Guide/Introduction/AssetComposition";

// Basic Transformations

import VectorRectProps from "./components/Guide/BasicTransformations/VectorRectProps";
import VectorRectScaleProps from "./components/Guide/BasicTransformations/VectorRectScaleProps";
import VectorRectRotateProps from "./components/Guide/BasicTransformations/VectorRectRotateProps";
import VectorRectWHProps from "./components/Guide/BasicTransformations/VectorRectWHProps";

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
    "component-based": ComponentBasedAssets,
    "balloon-sample": BalloonSample,
    "asset-composition": AssetComposition,
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
if (document.getElementById("catdogapp")) {
    console.log("catdog app detected");
    new Vue({
        render: h => h(App),
    }).$mount("#catdogapp");
}
else {
    console.log("no catdog");
}
window.vueapp = Vue;
