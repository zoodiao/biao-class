var history = require('./history')
    , event = require('./event');

init();

/*初始化*/
function init() {
  history.reload_list();
  history.render_list();
 event.bind_all();
}

/*监听点击回到顶部*/
function detect_click_top() {
  el_top.addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
}
