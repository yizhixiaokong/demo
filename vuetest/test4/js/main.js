var app = new Vue({
    el: '#app',
    data: {

    },
    methods: {
        onClick: function() {
            console.log('clicked');
        },
        onEnter: function() {
            console.log('enter');
        },
        onOut: function() {
            console.log('out');
        },
        onSubmit: function() {
            ///   e.preventDefault();
            console.log('submitted');
        },
        onKeyup: function() {
            console.log('up');
        },
        onKeydown: function() {
            console.log('down');
        },
        onEnter: function() {
            console.log('Enter');
        },
    },
});