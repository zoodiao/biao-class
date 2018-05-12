init();

/*初始化*/
function init() {
  reload_history_list();
  render_history_list();
  bind_events();
}

/*监听点击回到顶部*/
function detect_click_top() {
    el_top.addEventListener('click', function () {
      window.scrollTo(0, 0);
    });
  }

  