const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        description: 'super chaussettes',
        selectedVariant: 0,
        link: "https://www.youtube.com/watch?v=pggJ5s6sTpk&list=PLjwdMgw5TTLVzD9Jq_WBd1crqDwXRn4cw&index=6",
        inventory: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral" ],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg",
                variantQuantity: 0
            }
        ],
        persons: [
            {
                id: 1,
                nom: "marc"
            },
            {
                id: 2,
                nom: "jack"
            }
        ],
        cart: 0,
        onSale: true
    },
    methods: {
        addToCart(){
            this.cart++
        },
        removeFromCart(){
            this.cart--
        },
        updateProduct(index){
            this.selectedVariant = index
        }

    },
    computed: {
        title(){
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            }
            return  this.brand + ' ' + this.product + ' are not on sale'
        }
    }
});
