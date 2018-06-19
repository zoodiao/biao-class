window.http = {
    post : function (url, data) {
      data = data || {};
  
      data.app_key   = '980e492c7c7f09d84a5b537d2504314596e07a748d4b82431746aadb7cdcd961';
      data.timestamp = (new Date).getTime();
      data.signature = this.sign(data.app_key, data.timestamp);
  
      return axios
        .post('http://mock.biaoyansu.com/api/' + url, data)
        .then(function (res) {
          return res;
        });
    },
  
    sign : function (app_key, timestamp) {
      return btoa(app_key + timestamp);
    },
  };