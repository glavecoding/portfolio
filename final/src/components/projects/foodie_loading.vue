<template>
    <div class="foodie_loading">
        <img :src="image_link" alt="">
        <div class="text_loading">
             <h3 v-for="(t,key) in text" :class="key == time01 || key == time02?'move':''">{{t}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        image_link:String
    },
    data() {
        return {
            timer01:null,
            timer02:null,
            time01:0,
            time02:0,
            text:'Loading...'
        }
    },
    mounted(){
        this.timer01 = setInterval(()=>{
            this.time01 += 1
        },200)
        setTimeout(()=>{
            this.timer02 = setInterval(()=>{
                this.time02 +=1
            },200)
        },200)
    },
    watch:{
        time01(){
            if(this.time01 == this.text.length){
                this.time01 = 0
            }
        },
        time02(){
            if(this.time02 == this.text.length){
                this.time02 = 0
            }
        }
    },
    beforeDestroy(){

    }
}
</script>