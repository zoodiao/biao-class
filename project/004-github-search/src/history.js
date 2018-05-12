
var history_list;

function reload_history_list() {
    history_list = store_get('list') || [];
}

function overwrite_history_list(data) {
    store_set('list', data);
}

/*渲染历史记录*/
function render_history_list() {
    el_history_list.innerHTML = '';
    history_list.forEach(function (history) {
        var el_delete
            , el_history = document.createElement('div');

        el_history.classList.add('history');
        el_history.dataset.history = history;
        el_history.innerHTML = `
      <div class="text">${history}</div>
      <div class="tool">
        <span class="delete">删除</span>
      </div>`;
        el_delete = el_history.querySelector('.delete');
        el_history_list.appendChild(el_history);

        /*当本条历史记录被点击时将搜索框的关键词改为对应的历史关键词*/
        el_history.addEventListener('click', function (e) {
            /*如果点的是里面的删除按钮，就直接返回，既不上屏，又不搜索*/
            if (e.target.classList.contains('delete'))
                return;

            /*上屏*/
            set_keyword(this.dataset.history);
            /*搜搜*/
            search();
        });

        /*当删除按钮点击时*/
        el_delete.addEventListener('click', function () {
            /*先找到叫.history的先人，因为它那里存着对应的关键词*/
            var el_history = this.closest('.history')
                , kwd = el_history.dataset.history;

            /*如果删除失败，直接返回*/
            if (!find_and_delete(history_list, kwd))
                return;

            /*否则用新数据覆盖冰箱里的数据*/
            overwrite_history_list(history_list);
            /*重新渲染历史记录*/
            setTimeout(function () {
                render_history_list();
            }, 100);

            /*如果没有历史记录了就隐藏整个记录列表*/
            if (!history_list.length) {
                el_history_list.hidden = true;
            }
        });
    });
}

function show_history_list() {
    if (!history_list.length)
        return;

    el_history_list.hidden = false;
}

function hide_history_list() {
    el_history_list.hidden = true;
}

function search() {

    /*准备发射*/
    var http = new XMLHttpRequest();
    http.open('get', 'https://api.github.com/search/users?q=' + keyword + '&page=' + current_page + '&per_page=' + limit);
    http.setRequestHeader('Authorization', 'Basic ' + btoa('biaoyansu:94bfe1cf32b7aa3d0c2cbdd94958510841afece0'));

    /*发射*/
    http.send();

    /*返回后*/
    http.addEventListener('load', function () {
      /*解析（将JSON格式的字符串转换为JS能理解的数据）返回数据*/
      res = JSON.parse(http.responseText);

      /*拿到搜索结果总数*/
      amount = res.total_count;
      /*既然有了数据，不就可以渲染用户列表和页码组件了吗？*/
      render();
      render_pagination();
    });

    append_history(keyword);
  }