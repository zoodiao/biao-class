var keyword
,   limit
,   current_page
;

function get_keyword() {
    return keyword;
}

function set_keyword(val) {
    keyword = val;
    return keyword;
}

function get_limit() {
    return limit;
}

function set_limit(val) {
    limit = val;
    return limit;
}

function get_current_page() {
    return current_page;
}

function set_current_page(val) {
    current_page = val;
    return current_page;
}

module.exports = {
    get_keyword: get_keyword,
    set_keyword: set_keyword,
    get_limit: get_limit,
    set_limit: set_limit,
    get_current_page: get_current_page,
    set_current_page: set_current_page,
}