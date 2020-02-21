Vue.component('alert', { //全局组件定义
    template: '<button @click="on_click">给爷弹个窗</button>',
    methods: {
        on_click: function() {
            alert('得嘞~');
        }
    }
})
var Alert = {
    template: '<button @click="on_click">给爷也弹个窗</button>',
    methods: {
        on_click: function() {
            alert('得嘞~2');
        }
    }
}
var app = new Vue({
    el: '#seg1',
    components: {
        alert2: Alert, //局部组件定义，只能在seg1这个域中
    }
});
var app = new Vue({
    el: '#seg2',
});