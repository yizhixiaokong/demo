var Event = new Vue();

Vue.component('hxx', {
    template: `
        <div>
            hxx：<input @keyup="on_change" v-model="i_said"/>
        </div>
    `,
    methods: {
        on_change: function() {
            Event.$emit('hxx-said-something', this.i_said);
        }
    },
    data: function() {
        return {
            i_said: '',

        }
    },
})
Vue.component('jwx', {
    template: `
        <div>
            jwx:hxx说了{{hxx_said}}
        </div>
    `,
    data: function() {
        return {
            hxx_said: '',
        };
    },
    mounted: function() { //生命周期钩子之一
        var me = this;
        Event.$on('hxx-said-something', function(data) {
            me.hxx_said = data;
        });
    }
})
var app = new Vue({
    el: '#app',
});