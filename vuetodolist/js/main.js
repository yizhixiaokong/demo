;
(function() {
    'use strict';

    var Event = new Vue();

    function copy(obj) {
        return Object.assign({}, obj);
    }
    Vue.component('task', {
        template: '#task-tpl',
        props: ['todo'],
        methods: {
            action: function(name, params) {
                Event.$emit(name, params);
            }
        }
    });

    new Vue({
        el: '#main',
        data: {
            list: [],
            last_id: 0,
            current: {},
            checked: true,
            pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '明天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周后',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
        },
        mounted: function() {
            var me = this;
            this.list = ms.get('list') || this.list;
            this.last_id = ms.get('last_id') || this.last_id;

            setInterval(function() {
                me.check_alert();
            }, 1000);

            Event.$on('remove', function(id) {
                if (id) {
                    me.remove(id);
                }
            });
            Event.$on('toggle_complete', function(id) {
                if (id) {
                    me.toggle_complete(id);
                }
            });

            Event.$on('set_current', function(id) {
                if (id) {
                    me.set_current(id);
                }
            });
            Event.$on('toggle_detail', function(id) {
                if (id) {
                    me.toggle_detail(id);
                }
            });
        },
        methods: {
            check_alert: function() {
                var me = this;
                this.list.forEach(function(row, index) {
                    var alert_at = row.alert_at;
                    if (!alert_at || row.alert_confirmed) return;
                    var alert_at = (new Date(alert_at)).getTime();
                    var now = (new Date()).getTime();

                    if (now >= alert_at) {
                        var confirmed = confirm(row.title);
                        Vue.set(me.list[index], 'alert_confirmed', confirmed);
                    }
                });
            },
            marge: function() {
                var is_update, id;
                is_update = id = this.current.id;
                if (is_update) {
                    var index = this.find_index(id);
                    Vue.set(this.list, index, copy(this.current));
                } else {
                    var title = this.current.title;
                    if (!title && title !== 0) return;
                    var todo = copy(this.current);
                    this.last_id++;
                    ms.set('last_id', this.last_id);
                    todo.id = this.last_id;
                    this.list.push(todo);
                }
                this.reset_current();
            },
            remove: function(id) {
                var index = this.find_index(id);
                this.list.splice(index, 1);
            },
            next_id: function() {
                return this.list.length + 1;
            },
            set_current: function(todo) {
                this.current = copy(todo);
            },
            reset_current: function() {
                this.set_current({});
            },
            find_index: function(id) {
                return this.list.findIndex(function(item) {
                    return item.id == id;
                })
            },
            toggle_complete: function(id) {
                var index = this.find_index(id);
                Vue.set(this.list[index], 'completed', !this.list[index].completed);
            },
            toggle_detail: function(id) {
                var index = this.find_index(id);
                Vue.set(this.list[index], 'show_detail', !this.list[index].show_detail);
            },
        },
        watch: {
            list: {
                deep: true,
                handler: function(new_val, old_val) {
                    if (new_val) {
                        ms.set('list', new_val);
                    } else {
                        ms.set('list', []);
                    }
                }
            }
        },
    });
})();
//                 title: '……',
//                 completed: false,
//                 desc: '……',
//                 remind_at: '2020-10-01',