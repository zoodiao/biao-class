window.http = {
    post: function(url,data) {
        data = data || {};

        data.app_key ='95075de20d9817a2b465474433d224899784f70f8ea9e640281087e68b323f1c';
        data.timestamp = (new Data).getTime();
        data.signature = this.sign(data.app_key,data.timestamp);

        return axios
        .post('http://mock.biaoyansu.com/api' + url,data)
        .then(function(res) {
            return res;
        });
    },
    sign: function(app_key,timestamp) {
        return btoa(app_key + timestamp);
    },
};