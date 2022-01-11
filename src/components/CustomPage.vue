<template>
    <div>
        <h1>Custom page</h1>
        <button @click="goTo">
            Click
        </button>
    </div>
</template>

<script>
export default {
    data: () =>{
        return {
            page: {}
        }
    },
    methods:{
        goTo(){
            this.$router.push({
                name: 'PageOne'
            });
        }
    },
    created(){
        console.log(this.$route)
    }
}
</script>