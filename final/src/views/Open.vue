<template>
  <div class="Opening">
    <!-- <h1>test</h1> -->
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
