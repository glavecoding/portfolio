<template>
    <video
        :src="src"
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