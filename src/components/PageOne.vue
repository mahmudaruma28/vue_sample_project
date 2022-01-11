<template>
    <div>
        page 1
        <router-link :to="{ name: 'CustomPage', params: { slug: 'test-1' }}">
            Custom Page
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>