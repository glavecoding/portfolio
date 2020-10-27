<template>
    <div class="icon icon_animation_arrow_up">
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
        Hover:Boolean
    }
}
</script>