<template>
    <aside class="fixed_home side_left">
        <div v-if="Rule == 'Project'">
            <p @click="Go_home">Back Home</p>
        </div>
        <div :class="Show_scroll_down?'scroll_down':'scroll_down animate_fadeOutLeft'">
            <p>Scroll Down</p>
        </div>
        <div :class="Show_back_top?'back_top ':'back_top n animate_fadeOutLeft'" @click="Go_top">
            <p>Back Top</p>
        </div>
    </aside>
</template>
<script>
export default {
    props:{
        Rule:String,
        Body_height:Number,
        Height:Number,
        Show_top:Boolean
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
            return this.Body_height - this.Height == this.Screen_height?false:true 
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

        }
    },
}
</script>