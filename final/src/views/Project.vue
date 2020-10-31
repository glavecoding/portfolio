<template>
    <div class="project" v-scrolling="Handle_scroll">
            <transition mode="out-in" enter-active-class="animate__animated animate__fadeInRight animate__faster" leave-active-class="animate__animated animate__fadeOutLeft animate__faster">
                    <component
                    :is="Project_data.content"
                    @ref_list="Handle_ref"
                    :Structure="Project_data.structure"
                    :Next="Project_data.next"
                    :Project="Project_data"
                    />
            </transition>
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
        }
    },
    computed: {
        ...mapState('project',[
            'Projects'
        ]),
        Project_data(){
            if(this.Projects){
                const pjt_arr = this.Projects.filter(pjt=>pjt.order == this.$route.params.order)
                return pjt_arr[0]
            }
        }
    },
    methods:{
        Handle_scroll(){
            this.Height = window.scrollY
        },
        Handle_ref(e){
            this.classList = []
            this.classList = [...e]
        },
        Transition_control(){
            this.Transition = !this.Transition
        }
    },
    watch:{
        Reload(){
            if(this.Reload == false){
                // window.location.reload()
            }
        }
    }
}
</script>