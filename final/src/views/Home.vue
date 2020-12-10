<template>
    <article class="home" v-scrolling="Handle_scroll">
        <section class="sec_home">
            <div></div>
            <div class="wrapper_heading">
                <h1 data-text="GLAVE YEN" >GLAVE YEN</h1>
                    <div class="title-sub">
                        <h4 data-text="[" :class="Glitch_control">[</h4>
                        <div class="flick_right" :class="typing.length != origin.length + origin2.length ? 'flicking':''">
                            <h4 class="title" :class="Glitch_control" :data-text="typing">{{typing}}</h4>
                        </div>
                        <h4 data-text="]"  :class="Glitch_control">]</h4>
                    </div>
            </div>
        </section>
        <section class="sec_list" v-if="Projects">
            <ul>
                <li v-for="(pjt,key) in Projects" :key="key">
                    <div :style="{'backgroundImage':'url('+pjt.banner+')'}" class="project_image"
                    @click="Go_project(pjt.order,pjt.name)"
                    >
                    <img :src="pjt.list_image" alt="">
                    </div>
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
        this.origin = this.origin.split("")
        this.origin2 = this.origin2.split("")
        // this.window2h = window.innerHeight*2
    },
    data() {
        return {
            Height:0,
            // window2h:0,
            // Scroll_percent:0,
            Glitch:true,
            origin:"Hi, I'm Glave.",
            origin2:" I focus on web development & UI/UX Design.",
            typing:"",
            target:0,
            timer:null
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
        },
        Type_change(){
            return typeof origin == String && typeof origin2 == String? false:true
        },
        // Subtitle_opacity(){
        //     return this.Scroll_percent>50?(80-this.Scroll_percent)/100:1
        // },
        // Title_position(){
        //     return this.Scroll_percent>80?true:false
        // }
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

        typing:{
            handler(){
                const Time_out = this.origin.length,
                    Time_out2 = this.origin.length + this.origin2.length;

                if(this.typing.length == Time_out){
                    clearInterval(this.timer)
                    this.timer = null
                    this.target = 0
                    setTimeout(()=>{
                        this.timer = setInterval(()=>{
                            this.typing += this.origin2[this.target]
                            this.target += 1
                        },Math.random(1)*50 + 40)
                    },500)
                }else if(this.typing.length == Time_out2){
                    clearInterval(this.timer)
                    this.timer = null
                    this.target = 0

                    setTimeout(()=>{
                        this.typing = ""
                        this.timer = setInterval(()=>{
                            this.typing += this.origin[this.target]
                            this.target += 1
                        },Math.random(1)*100 + 40)
                    },10000)
                }
            },
            deep:true
        },
        origin:{
            handler(){
                if(typeof this.origin != String){
                    setTimeout(()=>{
                        this.timer = setInterval(()=>{
                            this.typing += this.origin[this.target]
                            this.target += 1
                        },Math.random(1)*50 + 40)
                    },1200)
                }
            }
        }
    },
    beforeDestroy(){
        clearInterval(this.timer)
        this.timer = null
        this.target = 0
        this.typing = ""
    }
}
</script>
