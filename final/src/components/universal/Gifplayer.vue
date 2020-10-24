<template>
    <video
        :src="src"
        autoplay
        loop
        muted
        playsinline
    >
        
    </video>
</template>
<script>
export default {
    name:"GIF Player",
    props:{
        src:String
    }
}
</script>