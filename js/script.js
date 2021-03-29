var app = new Vue({
    el: "#root",
    data: {
        listaEmail: []
    },
    mounted: function() {
        this.$nextTick(() => {
            for (let i=0; i<10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then( (result) => {
                    this.listaEmail.push(result.data.response);
                })
            }
            console.log(this);  
        }) 
    }
}) 