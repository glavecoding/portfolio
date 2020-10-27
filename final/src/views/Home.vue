<template>
    <article class="home" v-scrolling="Handle_scroll">
        <section class="sec_home">
            <div></div>
            <div class="wrapper_heading" >
                <h1 data-text="[" :class="Glitch_control">[</h1>
                <h1 class="title" :class="Glitch_control" data-text="Exploring the land unknown, Crafting the idea to the real world">Exploring the land unknown, Crafting the idea to the real world</h1>
                <h1 data-text="]"  :class="Glitch_control">]</h1>
            </div>
        </section>
        <section class="sec_list" v-if="Projects">
            <ul>
                <li v-for="(pjt,key) in Projects" :key="key">
                    <img src="" alt="" class="project_image">
                    <div class="wrapper_project_info">
                         <h1>{{pjt.order}}</h1>
                        <h3>{{pjt.name}}</h3>
                        <ul>
                            <li v-for="tag in pjt.tags">
                                <h5>{{tag}}</h5>
                            </li>
                        </ul>
                        <h4 class="button" @click="Go_project(pjt.order)">See More</h4>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:"Home",
    components:{
        
    },
    mounted(){
    },
    data() {
        return {
            Height:0,
            Glitch:true
        }
    },
    computed: {
        ...mapState('project',[
            'Projects'
        ]),
        Glitch_control(){
            return this.Glitch?'glitch':''
        }
    },
    methods: {
        Go_project(pjt){
            this.$router.push({path:'/project',query:{project:pjt}})
        },
        Handle_scroll(){
            this.Height = Math.floor(window.scrollY)
        },
        Handle_glitch(){
            this.Glitch = !this.Glitch
        }
    },
    watch: {
    },
}
</script>