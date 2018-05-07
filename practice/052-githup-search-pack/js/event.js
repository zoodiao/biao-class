//事件处理相关
var el = require('./element'),
search = require('./search')
;
//监听搜索表单提交事件
function detect_submit() {
    el.form.addEventListener('submit',function(e) {
        e.preventDefault();
        //获取搜索关键词
        var keyword = el.input.value;
        //开始搜
        search.user(keyword,function(data) {
            el.render_user_list(data.items) ;
        });
         
        
    });
}

function add_events() {
detect_submit();
}

module.exports = {
    detect_submit: detect_submit,
    add_events: add_events
};