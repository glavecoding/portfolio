<template>
    <aside class="fixed_home panel" @mouseleave="Show_panel(false)">
        <transition enter-active-class="animate__animated animate__fadeInLeft animate__faster" leave-active-class="animate__animated animate__fadeOutLeft animate__faster">
            <div class="wrapper_panel" v-if="Show">
                <div class="list_project">
                    <ul>
                        <li 
                            v-for="pjt in Projects"
                            v-if="Projects" 
                            @click="Go_project(pjt.order,pjt.name)"
                            :class="$route.params.order == pjt.order?'actived':''"
                            >
                            <h4>{{pjt.order}}.{{pjt.name}}</h4>
                        </li>
                    </ul>
                </div>
                <!-- <div class="sperated neon_effect" v-if="show_list_project"></div> -->
                <!-- <div class="list_control">
                    <ul>
                        <li>

                        </li>
                        <li>
                            <div @click="Switch_mode">
                                <div class="button" :class="Panel.Mode?'actived':''"></div>
                                <h4>{{Panel.Mode?'Day Mode':'Night Mode'}}</h4>
                            </div>
                        </li>
                        <li>
                            <div @click="Switch_language">
                                <div class="button" :class="Panel.Language?'actived':''"></div>
                                <h4>{{Panel.Language?'中文':'English'}}</h4>
                            </div>
                        </li>
                    </ul>
                </div> -->
                <div class="preview_box" v-if="show_list_project"></div>
            </div>
        </transition>
        <div
            class="panel_control"
            @click="Show?Show_panel(false):Show_panel(true)"
            @mouseenter="Hover_icon"
            @mouseleave="Hover_icon"
            :class="Show?'Open':''"
        >
            <icon_panel
                :Active="Show"
                :Hover="Hover"
            />
            <h4 :style="Hover || Show?{}:{'opacity':'0.4'}">Project list</h4>
        </div>
    </aside>
</template>
<script>
import icon_panel from '../icons/icon_panel'
import {mapState} from 'vuex'
export default {
    name:"Panel",
    props:{
        
    },
    components:{
        icon_panel,
    },
    data() {
        return {
            Show:false,
            Hover:false,
            Panel:{
                Mode:false,
                Language:false
            }
        }
    },
    computed: {
        ...mapState('project',[
            'Projects'
        ]),
        show_list_project(){
            return this.$route.name == 'Project'?true:false
        }
    },
    methods: {
        Show_panel(boo){
            this.Show = boo
        },
        Hover_icon(){
            this.Hover = !this.Hover
        },
        Switch_mode(){
            this.Panel.Mode = !this.Panel.Mode
            this.$emit('Switch_mode',this.Panel.Mode)
        },
        Switch_language(){
            this.Panel.Language = !this.Panel.Language
            this.$emit('Switch_language',this.Panel.Language)
        },
        Go_project(pjt_order,pjt_name){
            // this.Show = false
            this.$router.push({path:`/project/${pjt_order}/${pjt_name}`})
        }
    },
    watch: {
    },
}
</script>