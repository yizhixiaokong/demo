Vue.filter('currency', function(val, unit) {
    val = val || 0;
    unit = unit || '元';
    return val + unit;
});
Vue.filter('meter', function(val, unit) {
    val = val || 0;
    unit = unit || 'm';
    return val / 1000 + unit;
})
var app = new Vue({
    el: '#app',
    data: {
        price: 10,
        length: 10,
    }
});