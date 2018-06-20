const AdminPage = {
    data() {
        return {
            error: [],
            current: {},
            list: [],
            show_form: false,
            keyword: '',
            timer: null,
        };
    },
    mounted() {
        this.read();
    },
    methods: {
        search(e) {
            if (e)
                e.preventDefault();

            let keyword = this.keyword;

            let param = { or: { name: keyword } };
            http.post(`${this.model}/search`, param)
                .then(r => {
                    this.list = r.data.data;
                });
        },
        create(e) {
            e.preventDefault();

            if (!this.validate())
                return;

            let is_update = this.current.id;
            let action = is_udate ? 'update' : 'create';

            http
                .post(`${this.model}/${action}`, this.current)
                .then(r => {
                    if (r.data.success) {
                        this.current = {};
                        if (!is_update)
                            this.list.push(r.data.data);
                    }
                });
        },
        remove(id) {
            if (!confirm('确定要删除吗'))
                return;

            http
                .post(`${this.model}/delete`, { id })
                .then(r => {
                    if (r.data.success) {
                        util.delete_element_by_id(this.list, id);
                    }
                });
        },
        read() {
            http
                .post(`${this.model}/read`)
                .then(r => {
                    this.list = r.data.data;
                });
        },
        validate(row) {
            row = row || this.current;
            this.error = [];

            this.validate_props.forEach(prop => {

                let r = this[`validate` + prop] ();

                if (r === true)
                return;

                this.error.push(r);
            });

            return !this.error.length;
        },
    },
    watch : {
        keyword() {
            clearTimeout(this.timer);

            this.timer = setTimeout(() => {
                this.search();
            },300);
        },
    },
};

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
      <div v-if="error.length" class="error">
        <div v-for="e in error">{{e}}</div>
      </div>
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
      <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="row in list">
        <td>{{row.name}}</td>
        <td>{{row.capacity}}</td>
        <td>
          <button @click="current = row">更新</button>
          <button @click="remove(row.id)">删除</button>
        </td>
        </tr>
      </tbody>
    </table>
  </div>
    `,

    data() {
        return {
            validate_props: ['name', 'capacity'],
            error: [],
            current: {},
            list: [],
        };
    },
    methods: {
        create(e) {
            e.preventDefault();

            if (!this.validate())
                return;
            let is_update = this.current.id;
            let action = is_update ? 'update' : 'create';

            http
                .post(`table/${action}`, this.current)
                .then(r => {
                    if (r.data.success) {
                        this.current = {};
                        if (!is_update)
                            this.list.push(r.data.data);
                    }
                });
        },
        remove(id) {
            if (!confirm('确定要删除吗？'))
                return;

            http
                .post('table/delete', { id })
                .then(r => {
                    if (r.data.success) {
                        util.delete_element_by_id(this.list, id);
                    }
                });
        },

        validate(row) {
            row = row || this.current;

            this.error = [];

            this.validate_props.forEach(prop => {
                let r = this['validate_' + prop]();
                if (r === true)
                    return true;

                this.error.push(r);
            });

            return !this.error.length;
        },

        validate_name(value) {
            value = value || this.current.name;
            const MAX_LENGTH = 255;
            if (!value)
                return '桌号为必填项';

            if (value.length >= MAX_LENGTH)
                return '此项最大长度为${MAX_LENGT}';

            return true;
        },

        validate_capacity(value) {
            value = value || this.current.capacity;

            if (!value)
                return '座位数为必填项';

            if (value < 1 || value > 100000)
                return '不合法的座位数';

            return true;
        },

    },


    //初始化 
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

