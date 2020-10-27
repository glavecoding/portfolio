<template>
    <div class="icon icon_animation_panel">
        <div class="icon_wrapper" :class="Active?'icon_active':Hover?'icon_hover':''">
            <div></div>
            <div class="icon_neon_bar"></div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'icon_panel',
    props:{
        Active:Boolean,
        Hover:Boolean
    }
}
</script>