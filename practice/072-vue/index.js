new Vue({
    el: '#root',
    data: {
        current: null,
        memo_list: [],
    },
    methods: {
        add() {
            this.current = {};
            this.memo_list.push(this.current);
        },

        sync_to(memo_list) {
            localStorage.setItem('memo_list', JSON.stringify(memo_list));
        },
        sync_from() {
            this.memo_list = JSON.parse(localStorage.getItem('memo_list')) ||
                [
                    {
                        title: 'Title A',
                        content: 'aaaa',
                    },
                    {
                        title: 'TitleB',
                        content: 'bbbb',
                    },
                    {
                        title: 'Title C',
                        content: 'cccc',
                    },
                ];
        },
    },
    watch: {
        memo_list: {
            deep : true,
            handler: function(n){
                this.sync_to(n);
            },
        },
    },
    created() {
        this.sync_from();
    },
});
