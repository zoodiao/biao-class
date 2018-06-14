/*route: {
    home:{
        path: '/home',
        template_url: './template/home.html'
        el: '#home',
        hook：{
            before: function() {},
            after: function(){},
        }
    },
    about: {// 另一条规则
    。。。}
}
...}
//----------------
//钩子
//--------------
//
//访问任何一页都会经过以下几个步骤
//  before: 已加载设置，地址未发生变化，但是未渲染
//  after: 已加载设置，地址未发生变化，已渲染
//  你可以将自己的逻辑通过这些钩子传进来，当路由执行到
// 对应的位置时就会触发你的函数。

hook: {
    before: function() {},
    after: function() {},
}
//
*/
constructor(config) {
    //初始化this.current,确保以后this.current.xxx不报错
    this.current = {};
    //将传进来的设置拷一份，绑到当前对象上
    this.state = Object.assign({}, config);

    //如果用户直接访问了某个路由，默认情况下页面不会渲染，
    // 因为没有触发hashchange事件 ，所以就不会调用go（），更不会渲染
    this.init_page();

    //监测浏览器的变化
    this.detect_hash_change();
}
/**
 * 监听hash的变化
 * 
 * 当浏览器地址发生变化时应该干什么
 */


detect_hash_change() {
    window.addEventListener('hashchange', () => {
        //将当前页面的原始hash记录在current中，方便后续使用
        this.current.hash = location.hash;

        let route_name = this.parse_current_hash();

        console.log('route_name:', route_name);
        this.go(route_name);
    });
}


go(route_name) {

    let route = this.state.route[route_name];

    //保存上一条历史路由
    this.previous = this.current;

    //保存当前路由
    this.current = route;

    //删除之前的页面（）
    this.remove_previous_tpl();

    //渲染当前页面
    this.render_current();

}

remove_previous_tpl() {
    let element = document.querySelector(this.previous.el);
    if (!element)
        return;

    element.innerHTML = '';

}

init_page() {

    let route_name = this.parse_hash(location.hash);
    if (!route_name)
        route_name = this.sate.default;
        
        
        this.go(route_name);

}

set_data(route_name, keys, value) {

}

render_current() {
    this.render(this.current);
}

parse_current_hash() {

}

parse_hash() {

}

render() {

}

compile() {

}

get_template() {

}

function trim() {

}

let about_data = {
    name: '王花花',
};

let o = {
    default: 'home',
    route: {
        home: {
            path: '#/home/',
            el: '#home',
            template_url: './tpl/home.html',
            data: {
                login: {
                    username: 'whh',
                    password: '',
                },
            },
        },
        about: {
            path: '/about',
            el: '#about',
            template_url: './tpl/about.html',
            data: about_data,
        },
    },
};

let route = new route(o);
let count = 1;


setInterval(function () {

})

