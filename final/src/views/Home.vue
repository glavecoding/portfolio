<template>
    <article class="home" v-scrolling="Handle_scroll">
        <section class="sec_home">
            <div></div>
            <div class="wrapper_heading" >
                <h1 data-text="GLAVE YEN">GLAVE YEN</h1>
                <div class="title-sub">
                    <h4 data-text="[" :class="Glitch_control">[</h4>
                    <h4 class="title" :class="Glitch_control" :data-text="`Hi, I'm Glave.`">Hi, I'm Glave.</h4>
                    <h4 data-text="]"  :class="Glitch_control">]</h4>
                </div>
            </div>
        </section>
        <section class="sec_list" v-if="Projects">
            <ul>
                <li v-for="(pjt,key) in Projects" :key="key">
                    <div :style="{'backgroundImage':'url('+pjt.banner+')'}" class="project_image"
                    @click="Go_project(pjt.order,pjt.name)"
                    />
                    <div class="wrapper_project_info" @click="Go_project(pjt.order,pjt.name)">
                        <div class="wrapper_order">
                            <p data-text="[">[</p>
                            <h1 :data-text="pjt.order">{{pjt.order}}</h1>
                            <p data-text="]">]</p>
                        </div>
                        
                        <h3>{{pjt.name}}</h3>
                        <ul>
                            <li v-for="tag in pjt.tags">
                                <h4>{{tag}}</h4>
                            </li>
                        </ul>
                        <div class="see_more">
                            <h4 class="button" @click="Go_project(pjt.order,pjt.name)">See More</h4>
                            <icon_arrow_down/>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>
<script>
import {mapState} from 'vuex'
import icon_arrow_down from '../components/icons/icon_arrow_down'
export default {
    name:"Home",
    components:{
        icon_arrow_down
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
        ...mapState('universal',[
            'images'
        ]),
        Glitch_control(){
            return this.Glitch?'glitch':''
        }
    },
    methods: {
        Go_project(pjt_order,pjt_name){
            const project = pjt_order
            const name = pjt_name
            this.$router.push({path:`/project/${project}/${name}`})
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