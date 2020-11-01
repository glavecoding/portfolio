<template>
  <div class="Opening">
  </div>
</template>
<script>
export default {
  name: 'Open',
  components: {
   
  },
  mounted() {
    setTimeout(()=>{
      this.$router.push({path:'/home'})
    },4500)
  },
  watch: {
    
  },
}
</script>
