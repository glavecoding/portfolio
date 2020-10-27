<template>
    <aside class="fixed_home side_left">
        <div v-if="Rule == 'Project'" class="back_home" @click="Go_home">
            <icon_arrow_up/>
            <p>Back Home</p>
        </div>
        <div :class="Show_scroll_down?'scroll_down animate_fadeOutLeft':'scroll_down'">
            
        </div>
        <div :class="Show_back_top?'back_top ':'back_top n animate_fadeOutLeft'" @click="Go_top">
            <icon_arrow_up/>
            <p>Back Top</p>
        </div>
    </aside>
</template>
<script>
import icon_arrow_up from '../icons/icon_arrow_up'
import icon_arrow_down from '../icons/icon_arrow_down'
export default {
    props:{
        Rule:String,
        Body_height:Number,
        Height:Number,
        Show_top:Boolean
    },
    components:{
        icon_arrow_up,
        icon_arrow_down
    },
    data() {
        return {
            Screen_height:0
        }
    },
    mounted(){
        this.Screen_height = window.innerHeight
        console.log(window.innerHeight)
    },
    computed:{
        Show_scroll_down(){
            return this.Height > (this.Body_height*2/3)?true:false 
        },
        Show_back_top(){
            return this.Height > (this.Body_height/3) ?true:false
        }
    },
    methods: {
        Go_home(){
            this.$router.push({path:'/home'})
        },
        Go_top(){
            window.scrollTo(0,0)
        }
    },
}
</script>