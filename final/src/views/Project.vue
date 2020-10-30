<template>
    <div class="project" v-scrolling="Handle_scroll">
            <section
                class="banner"
                :style="{'background':'url('+Project_data.banner+'),linear-gradient(180deg,rgba(230,1,162,0) 40%,rgba(230,1,162,0.6) 60%,#5400d5)'}">
                <div class="wrapper-title">
                    <h1 class="order">{{$route.query.project}}</h1>
                    <h1>{{Project_data.name}}</h1>
                    <ul>
                        <li v-for="tag in Project_data.tags"><h4>{{tag}}</h4></li>
                    </ul>
                </div>
            </section>
            <section class="info">
                <ul>
                    <li>
                        <h3>Roles</h3>
                        <div>
                            <p v-for="text in Project_data.info.role">{{text}}</p>
                        </div>
                    </li>
                    <li>
                        <h3>Time & Duration</h3>
                        <div>
                            <p v-for="text in Project_data.info.time">{{text}}</p>
                        </div>
                    </li>
                    <li>
                        <h3>Skills</h3>
                        <div>
                            <p v-for="text in Project_data.info.skills">{{text}}</p>
                            
                        </div>
                    </li>
                </ul>
            </section>
                <component
                :is="Project_data.content"
                @ref_list="Handle_ref"
                :Structure="Project_data.structure"
                :Next="Project_data.next"
                :Project="Project_data"
                v-if="Transition"
                />
            <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate_faster">
                <Navigation
                    :Height="Height"
                    :List="classList?classList:[]"
                    v-if="classList && (Height + 300) > classList[0].height"
                />
            </transition>
    </div>
</template>
<script>
import Navigation from '../components/universal/Navigation'
import {mapState} from 'vuex'
import soonport from '../components/projects/soonport'
import muni from '../components/projects/muni'
import subaru from '../components/projects/subaru'
import foodie from '../components/projects/foodie'
import metrix from '../components/projects/metrix'
import drip from '../components/projects/drip'
export default {
    name:'Project',
    components:{
        Navigation,
        soonport,
        muni,
        subaru,
        foodie,
        metrix,
        drip
    },
    data() {
        return {
            Height:0,
            classList:null,
            Transition:true
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
        },
        Handle_ref(e){
            this.classList = [...e]
        },
        Transition_control(){
            this.Transition = !this.Transition
        }
    },
}
</script>