function bind_events() {
    detect_submit();
    detect_click_top();
    detect_click_pagination();
    detect_click_input();
    detect_click_document();
    // detect_blur_input();
    //@1 detect_click_history_list();
}

/*通过用户名搜Github用户
* @param String keyword 关键词
* */

/*绑定表单提交事件*/
function detect_submit() {
    el_form.addEventListener('submit', function (e) {
        e.preventDefault();

        /*获取输入的关键词*/
        keyword = el_input.value;

        if (!keyword) {
            alert('你闹呢');
            return;
        }

        /*重置页码*/
        reset_page();

        /*重置用户列表HTML*/
        reset_user_list();

        /*隐藏两个只有得到结果才有意义的组件*/
        el_placeholer.hidden = true;

        search(keyword);

        clear_pagination();
        hide_pagination();
    });
}

function detect_click_pagination() {
    el_pagination_start.addEventListener('click', function () {
        goto_page(1);
    });
    el_pagination_end.addEventListener('click', function () {
        goto_page(page_amount);
    });
}

function detect_click_input() {
    el_input.addEventListener('click', function () {
        show_history_list();
    });
}

function detect_click_document() {
    /*给html元素加点击事件*/
    document
        .documentElement
        .addEventListener('click', function (e) {
            var target = e.target;

            console.log(target);

            var in_search_input = target.closest('#search-input')
                , in_history_list = target.closest('#history-list')
                ;

            if (in_search_input || in_history_list)
                return;

            hide_history_list();
        });
}