import Vue from 'vue'
import App from "./App";
import HomePage from "./examples/HomePage";
import Demo from "./examples/Demo";

// Introduction
import VectorRect from "./examples/Introduction/Rectangle";
import ComponentBasedAssets from "./examples/Introduction/ComponentBasedAssets";
import BalloonSample from "./examples/Introduction/BalloonSample";
import AssetComposition from "./examples/Introduction/AssetComposition";

// Basic Transformations
import TranslationProp from "./examples/BasicTransformations/Translation";
import ScaleProp from "./examples/BasicTransformations/Scale";
import RotationProp from "./examples/BasicTransformations/Rotation";
import WidthHeight from "./examples/BasicTransformations/WidthHeight";

// Timers
import UsingScrollTimer from "./examples/Timers/UsingScrollTimer";
import UsingClockTimer from "./examples/Timers/UsingClockTimer";

// Art Import
import Import from "./examples/ArtAsset/Import";
import ImportLayer from "./examples/ArtAsset/ImportLayer";
import ImportMultiLayer from "./examples/ArtAsset/ImportMultiLayer";

import FilterExample from "./examples/UsingFilters/FilterExample";
import AnimatedBalloon from "./examples/Animation/AnimatedBalloon";
import CreateKeyframe from "./examples/Animation/CreateKeyframe";
import MultiAction from "./examples/Animation/MultiAction";
import MultipleAnimations from "./examples/Animation/MultipleAnimations";
import PropAnimation from "./examples/Animation/PropAnimation";
import RenderlessExample from "./examples/Animation/RenderlessExample";
import SeparateAnimationFile from "./examples/Animation/SeparateAnimationFile";
import ComplicatedAnimation from "./examples/Animation/ComplicatedAnimation";
import ComplicatedToTween from "./examples/Animation/ComplicatedToTween";
import ColorAnimation from "./examples/KeyframeAnimation/Color";
import DelayModifier from "./examples/KeyframeModifiers/Delay";
import RepeatModifier from "./examples/KeyframeModifiers/Repeat";
import HiddenModifier from "./examples/KeyframeModifiers/Hidden";
import DelayHiddenChain from "./examples/KeyframeModifiers/DelayHiddenChain";
import CameraControl from "./examples/ArtAsset/CameraControl";

let components = {
    Demo,
    HomePage,
    "vector-rect": VectorRect,
    ComponentBasedAssets,
    BalloonSample,
    AssetComposition,
    UsingScrollTimer,
    UsingClockTimer,
    TranslationProp,
    ScaleProp,
    RotationProp,
    WidthHeight,
    'asset-import': Import,
    'asset-import-layer': ImportLayer,
    'asset-import-multi-layer': ImportMultiLayer,
    FilterExample,
    AnimatedBalloon,
    CreateKeyframe,
    MultiAction,
    MultipleAnimations,
    PropAnimation,
    RenderlessExample,
    SeparateAnimationFile,
    ComplicatedAnimation,
    ComplicatedToTween,
    ColorAnimation,
    DelayModifier,
    RepeatModifier,
    HiddenModifier,
    DelayHiddenChain,
    CameraControl,
};

Object.entries(components).map((item) => {
    Vue.component(item[0], item[1]);
});

Vue.config.productionTip = false

function whenBodyLoaded(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// eslint-disable-next-line
if (document.getElementById("catdogapp")) {
    console.log("catdog app detected");
    new Vue({
        render: h => h(App),
    }).$mount("#catdogapp");
}
else {
    console.log("looking for demo");

    if(document) {
        whenBodyLoaded(() => {
            console.log({ ...document }, document.querySelectorAll(".demo"));
            document.querySelectorAll(".demo").forEach((element) => {
                let args = element.getAttribute("component").split(" ");
                /* eslint-disable-next-line */
                let props = {
                    src: args[0],
                    start: (args[1]) ? parseInt(args[1]) : 0,
                    end: (args[2]) ? parseInt(args[2]) : 1000,
                };

                console.log("found a demo", props, args);
                let app = new Vue({
                    render: h => h('demo', { props }),
                }).$mount(element);

                console.log("app is", app);
            });
        });
    }
    else {
        console.log("no document");
    }
}
window.vueapp = Vue;

