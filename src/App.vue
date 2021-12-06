<template>
    <div class="relative min-h-screen md:flex">
        <SideBar />
        <Home />
    </div>
</template>

<script>
import Home from './components/Home.vue';
import SideBar from "./components/SideBar.vue";

export default {
    name: "App",
    components: {
        SideBar,
        Home,
    },
};
</script>
