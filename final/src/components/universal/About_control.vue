<template>
    <aside class="fixed_home about_control"  @click="Go_about">
        <h4>About Me</h4>
        <icon_about/>
    </aside>
</template>
<script>
import icon_about from '../icons/icon_about_me.vue'
export default {
    name:"About_control",
    props:{

    },
    components:{
        icon_about
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