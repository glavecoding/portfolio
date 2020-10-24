<template>
    <aside class="fixed_home about_control">
        <h4 @click="Go_about">About</h4>
    </aside>
</template>
<script>
export default {
    name:"About_control",
    props:{

    },
    data() {
        return {
            
        }
    },
    methods:{
        Go_about(){
            this.$router.push({path:'/about'})
        }
    }
}
</script>