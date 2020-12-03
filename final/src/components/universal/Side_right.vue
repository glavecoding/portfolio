<template>
    <aside class="fixed_home side_right">
            <ul>
                <li>
                    <h4>CV</h4>
                </li>
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