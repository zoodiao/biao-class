let Home = Vue.component('home', {
    template: `<div> <h1>Home</h1> </div>`,
    data: function () {
        return {};
    }
});

let About = Vue.component('about', {
    template: `<div><h1>我叫李双的</h1> <button @click="alert()">Yo</button></div>`,
    methods: {
        alert : function() {
            alert('muhahah')
        }
    },
    data: function () {
        return {};
    },
});


new Vue({
    data: {},
    methods: {},
    router: new VueRouter({
        routes: [
            { path: '/home', component: Home },
            { path: '/about', component: About },
        ],
    }),
}).$mount('#root');