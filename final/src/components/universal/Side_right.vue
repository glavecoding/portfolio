<template>
    <aside class="fixed_home side_right">
            <ul>
                <li @click="Go_link('./static/resume/Resume_CV.pdf')">
                    <h4>CV</h4>
                </li>
                <li @click="Go_link('https://www.linkedin.com/in/glavedesign')">
                    <img :src="images.home.linkedin" alt="">
                </li>
                <li @click="Go_link('https://medium.com/@glavecoding')">
                    <img :src="images.home.medium" alt="">
                </li>
                <li @click="Go_link('https://github.com/glavecoding')">
                    <img :src="images.home.github" alt="">
                </li>
                
            </ul>
    </aside>
</template>
<script>
import icon_arrow_up from '../icons/icon_arrow_up'
import {mapState} from 'vuex'

export default {
    name:"Right_side",
    data() {
        return {
            Fold:false
        }
    },
    components:{
        icon_arrow_up
    },
    computed:{
        ...mapState('universal',[
            'images'
        ])
    },
    methods: {
        Show_contact(){
            this.Fold = !this.Fold
        },
        Go_link(Link){
            window.open(Link,'_blank')
        }
    },

}
</script>