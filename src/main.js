import Vue from 'vue'
import App from "./App";

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
