<template>
    <aside class="fixed_home side_right" @mouseenter="Show_contact" @mouseleave="Show_contact">
        <transition enter-active-class="animate__animated animate__fadeInRight animate__faster" leave-active-class="animate__animated animate__fadeOutRight animate__faster"> 
            <ul v-if="Fold">
                <li>
                    <img :src="images.home.linkedin" alt="">
                </li>
                <li>
                    <img :src="images.home.medium" alt="">
                </li>
                <li>
                    <img :src="images.home.github" alt="">
                </li>
            </ul>
        </transition>
        <icon_arrow_up
            :Hover="false"
            :Active="false"
        />
        <p>
            contact
        </p>
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
        }
    },

}
</script>