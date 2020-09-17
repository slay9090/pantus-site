export default {
    data() {
        return {
            UrlMain: "",
        }
    },
    created(){
        if(this.dataset != undefined){
            this.UrlMain = this.dataset.ProductCard.ProductCardImage.url;
        }
    },
    methods:{
        MainUrl(index){
            this.UrlMain = this.dataset.ProductCard.album[index].url
        },
        MainTrue(){
            this.UrlMain = this.dataset.ProductCard.ProductCardImage.url
        },
        reset(){
            this.UrlMain = this.dataset.ProductCard.ProductCardImage.url;  
        }
    },
    watch:{
        dataset(){
            this.UrlMain = this.dataset.ProductCard.ProductCardImage.url;
        }
    }
}   