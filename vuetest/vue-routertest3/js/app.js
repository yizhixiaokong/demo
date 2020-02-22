var routes = [{
        path: '/',
        component: {
            template: `
            <div>
                <h1>
                    首页
                </h1>
            </div>
            `,
        }
    },
    {
        path: '/login',
        component: {
            template: `
            <div>
                <h1>
                    登陆
                </h1>
            </div>
            `,
        }
    },
    {
        path: '/post',
        component: {
            template: `
            <div>
                <ul>
                    <li>帖子列表</li>
                    <li>标签管理</li>
                </ul>
            </div>
            `,
        }
    },

];


var router = new VueRouter({
    routes: routes,
});

router.beforeEach(function(to, from, next) {
    var logged_in = true;
    if (!logged_in && to.path == '/post')
        next('login');
    else
        next();
})

new Vue({
    el: '#app',
    router: router,

});