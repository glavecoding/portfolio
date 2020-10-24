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
        <div class="wrapper_panel" v-if="Show">
            <div class="list_project" v-if="show_list_project">
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="sperated neon_effect" v-if="show_list_project"></div>
            <div class="list_control">
                <ul>
                    <li>
                        <input type="checkbox" name="" id="">
                    </li>
                    <li>
                        <input type="checkbox" name="" id="">
                    </li>
                </ul>
            </div>
            <div class="preview_box" v-if="show_list_project"></div>
        </div>
    </aside>
</template>
<script>
import icon_panel from '../icons/icon_panel'
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
            Hover:false
        }
    },
    computed: {
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
        }
    },
}
</script>