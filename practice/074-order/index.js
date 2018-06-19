const Home = Vue.component('home', {
    template: `<div>
    <h1>欢迎来到背背山吃饭大学</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsa minima placeat! A ad animi asperiores aut dolores facere illum iste laudantium maxime neque numquam odit, omnis quia, reprehenderit veritatis!</p>
  </div>`,
});

const Admin = Vue.component('admin', {
    template: `<div class="admin row">
    <div class="col-lg-3 nav">
      <router-link to="/admin/table">桌号管理</router-link>
      <router-link to="/admin/dish">菜品管理</router-link>
    </div>
    <div class="col-lg-9 main">
      <router-view></router-view>
    </div>
  </div>`,
});

const AdminDish = Vue.component('admin-dish', {
    template: `<div>
    <h2>菜品管理</h2>
    </div>`,
});

const AdminTable = Vue.component('admin-table', {
    template: `<div>
    <h2>桌号管理</h2>
    <form @submit="create($event)">
      <div class="input-wrap">
        <label>桌号</label>
        <input type="text" v-model="current.name">
      </div>
      <div class="input-wrap">
        <label>座位数</label>
        <input type="number" v-model="current.capacity">
      </div>
      <div class="input-wrap">
        <button>提交</button>
      </div>
    </form>
    
    <table class="list">
      <thead>
      <tr>
      <th>桌号</th>
      <th>座位数</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="row in list">
        <td>{{row.name}}</td>
        <td>{{row.capacity}}</td>
        </tr>
      </tbody>
    </table>
    </div>`,

    data() {
        return {
            current: {},
            list: [],
        };
    },
    methods: {
        create(e) {
            e.preventDefault();
            http
                .post('table/create', this.current)
                .then(r => {
                    if (r.data.success) {
                        this.current = {};
                        this.list.push(r.data.data);
                    }
                });
        },
    },
    mounted() {
        http.post('table/read')
            .then(r => {
                this.list = r.data.data;
            });
    },
});

// const Water = Vue.component('admin-dish-watermelon', {
//     template: `<div>
//     <h3>西瓜炒牛肉，不好吃不收钱</h3>
//     </div>`,
// });

new Vue({
    el: '#root',
    router: new VueRouter({
        routes: [
            { path: '/', component: Home },
            {
                path: '/admin/',
                component: Admin,
                children: [
                    {
                        path: 'dish',
                        component: AdminDish,
                        // children: [
                        //     {
                        //         path: 'watermelon',
                        //         component: Water,
                        //     },

                        // ]
                    },

                    {
                        path: 'table',
                        component: AdminTable,
                    },

                ],
            },
        ],
    }),
});

// http.post('MODEL/CREATE', {
//   name      : 'table',
//   structure : [
//     {
//       name     : 'name',
//       type     : 'string',
//       nullable : false,
//     },
//     {
//       name     : 'capacity',
//       type     : 'integer',
//       nullable : false,
//     },
//   ],
// });

