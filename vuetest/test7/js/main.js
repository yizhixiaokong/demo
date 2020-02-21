var app = new Vue({
    el: '#app',
    data: {
        role: 'admin',
        math: 22,
        physics: 95,
        english: 65
    },
    methods: {

    },
    computed: { //计算属性,同mathods不同在于计算一次后，若数据不改变，计算结果存在缓存中
        sum: function() {
            return this.math + this.physics + this.english;
        },
        average: function() {
            return Math.round(this.sum / 3);
        },
    },
});