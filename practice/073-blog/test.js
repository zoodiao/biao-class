let FirstPage = Vue.component('home', {
    template: `<div><h1>No.1</h1></div>`,
        data: function() {
            return{};
        },
});

let SecondPage = Vue .component('about',{
    template: `<div><h1>No.2</h1> <button @click="alert()">hei-.-</button> </div>`,
    methods:  {
        alert: function() { 
            alert('kokokok') 
        },
    },
    data : function() {
        return{};
    },
});

new Vue({
    data: {},
    methods: {},
    router: new VueRouter({
        routes: [
            {path: '/home',component: FirstPage},
            {path: '/about',component: SecondPage},
        ],
    }),
}).$mount('#root');