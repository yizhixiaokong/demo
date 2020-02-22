var base = {
    methods: {
        show: function() {
            this.visible = true;
        },
        hide: function() {
            this.visible = false;
        },
        toggle: function() {
            this.visible = !this.visible;
        },
    },
    data: function() {
        return {
            visible: false,
        }
    },
}
Vue.component('tooltip', {
    template: `
    <div>
        <span @mouseenter="show" @mouseleave="hide">some</span>
        <div v-if="visible">一些东西</div>
    </div>
    `,
    mixins: [base],
});
Vue.component('popup', {
    template: `
        <div>
            <button @click="toggle">显示</button>
            <div v-if="visible">
                <span @click="hide">X</span>
                somesome
            </div>
       </div>
    `,
    mixins: [base],
    data: function() { //明确指定的会覆盖mixins里的同名
        return {
            visible: true,
        }
    }
});

var app = new Vue({
    el: '#app',

});