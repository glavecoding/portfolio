<template>
    <aside class="fixed_home panel">
        <div
            class="panel_control"
            @click="Show_panel"
            @mouseenter="Hover_icon"
            @mouseleave="Hover_icon"
        >
            <icon_panel
                :Active="Show"
                :Hover="Hover"
            />
            <h4>Panel</h4>
        </div>
        <transition enter-active-class="animate__animated animate__fadeInLeft animate__faster" leave-active-class="animate__animated animate__fadeOutLeft animate__faster">
            <div class="wrapper_panel" v-if="Show">
                <div class="list_project" v-if="show_list_project">
                    <ul>
                        <li v-for="pjt in Projects" v-if="Projects" @click="Go_project(pjt.order)">
                            <h4>{{pjt.order}}.{{pjt.name}}</h4>
                        </li>
                    </ul>
                </div>
                <div class="sperated neon_effect" v-if="show_list_project"></div>
                <div class="list_control">
                    <ul>
                        <li>

                        </li>
                        <li>
                            <div @click="Switch_mode">
                                <div :class="Panel.Mode?'actived':''"></div>
                                <h4>{{Panel.Mode?'Day Mode':'Night Mode'}}</h4>
                            </div>
                        </li>
                        <li>
                            <div @click="Switch_language">
                                <div :class="Panel.Language?'actived':''"></div>
                                <h4>{{Panel.Language?'中文':'English'}}</h4>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="preview_box" v-if="show_list_project"></div>
            </div>
        </transition>
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
        Show_panel(){
            this.Show = !this.Show
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
        Go_project(pjt){
            this.Show = false
            this.$router.replace({query:{project:pjt}})
        }
    },
    watch: {
    },
}
</script>