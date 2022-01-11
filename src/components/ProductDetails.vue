<template>
    <div>
        <h1>Product Details</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data: () => ({
        productDetails: {}
    }),
    methods:{
        async getProductDetails(){
            return await axios.get(`http://127.0.0.1:8000/api/products/details/${this.$route.params.slug}`).then((response) => {
                console.log(response)
                this.productDetails = response.data.data
            })
        }
    },
    created(){
        this.getProductDetails()
    },
}
</script>

