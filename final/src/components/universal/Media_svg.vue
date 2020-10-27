<template>
    <svg>
        <component :is="svg_id"></component>
    </svg>
</template>
<script>
export default {
    props:{
        svg_id:String
    }
}
</script>