

; (function () {
  'use strict';

  /*模板床*/
  var el_user_list = document.getElementById('user-list')
    , el_form = document.getElementById('search-form')
    , el_input = document.getElementById('search-input')
    , el_top = document.getElementById('top')
    , el_placeholer = document.getElementById('placeholer')
    , el_pagination_container = document.getElementById('pagination-container')
    , el_pagination = el_pagination_container.querySelector('#pagination')
    , el_pagination_start = el_pagination_container.querySelector('#pagination-start')
    , el_pagination_end = el_pagination_container.querySelector('#pagination-end')
    , el_history_list = document.getElementById('history-list')
    , history_list
    , keyword
    , no_more
    , amount
    , page_amount
    , MAX_LIMIT = 999
    , max_page_btn = 7
    , current_page = 1
    , limit = 5
    ;

  /*返回的数据*/
  var res;

  init();

  /*初始化*/
  function init() {
    reload_history_list();
    render_history_list();
    bind_events();
  }


  /*通过用户名搜Github用户
  * @param String keyword 关键词
  * */



  /*从冰箱中重新获取搜索历史记录*/






  //@1
  // function detect_click_history_list() {
  //   el_history_list.addEventListener('click', function (e) {
  //     var history_wrapper = e.target.closest('.history');
  //     if (!history_wrapper)
  //       return;
  //
  //     set_keyword(history_wrapper.dataset.history);
  //   });
  // }


})();

