<template>
    <div class="slider">
        <div :class="Control > 0 ?'':'vanish'" class="left_control">
            <h3 @click="Slider_control(-1)"><<<</h3>
        </div>
        <slot name="thumbnails">
            
        </slot>
        <div class="right_control" :class="Control != (Thumbs_num -1)?'':'vanish'">
            <h3 @click="Slider_control(1)">>>></h3>
        </div>
    </div>
</template>
<script>
export default {
    name:"slider",
    props:{
        Control:Number,
        Thumbs_num:Number
    },
    methods:{
        Slider_control(num){
            return this.Control !=0 ? 
                this.$emit('Control_number',num):
                num >0?
                this.$emit('Control_number',num):
                false
        }
    }
}
</script>