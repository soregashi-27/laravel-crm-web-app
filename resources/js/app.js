const { mixin } = require("vue/types/umd");

require("./bootstrap");

window.Vue = require("vue");
Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

mix.disableNotifications();

const app = new Vue({
    el: "#app"
});
