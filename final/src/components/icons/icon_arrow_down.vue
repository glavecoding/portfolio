<template>
    <div class="icon icon_animation_arrow_down" :class="Auto?'auto_down':''">
        <div class="icon_wrapper" :class="Hover?'icon_hover':''">
            <div></div>
            <div class="icon_neon_bar"></div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'icon_arrow_down',
    props:{
        Hover:Boolean,
        Auto:Boolean
    }
}
</script>