const app = new Vue({
    el: "#app",
    data: {
        database: [],
    },
    created() {
        axios.get("http://localhost:8888/php/php-ajax-dischi/backend.php")
        .then( (response) => {
            this.database = response.data;
        });
    }
});