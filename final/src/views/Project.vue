<template>
    <div class="project" v-scrolling="Handle_scroll">

            <section class="banner">
                <h1>{{$route.query.project}}</h1>
                <h1>Project title</h1>
                <ul>
                    <li v-for="tag in Project_data.tags">{{tag}}</li>
                </ul>
            </section>
            <section class="info">
                <ul>
                    <li>
                        <h4>Purposes</h4>
                    </li>
                    <li>
                        <h4>Roles</h4>
                    </li>
                    <li>
                        <h4>Time & Duration</h4>
                    </li>
                    <li>
                        <h4>Skills</h4>
                    </li>
                </ul>
            </section>
            <section class="overview">
                <div class="text_area">
                    {{Project_data}}
                </div>
            </section>
            <section class="research">

            </section>
            <section class="reflection">

            </section>
            <Navigation
                :Height="Height"
            />
    </div>
</template>
<script>
import Navigation from '../components/universal/Navigation'
import {mapState} from 'vuex'
export default {
    name:'Project',
    components:{
        Navigation
    },
    data() {
        return {
            Height:0
        }
    },
    computed: {
        ...mapState('project',[
            'Projects'
        ]),
        Project_data(){
            if(this.Projects){
                const pjt_arr = this.Projects.filter(pjt=>pjt.order == this.$route.query.project)
                return pjt_arr[0]
            }
        }
    },
    methods:{
        Handle_scroll(){
            this.Height = window.scrollY
        }
    }
}
</script>