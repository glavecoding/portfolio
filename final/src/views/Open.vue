<template>
  <div class="Opening">
    <h1>test</h1>
  </div>
</template>
<script>

export default {
  name: 'Open',
  components: {
   
  },
  mounted() {
    this.$router.push({path:'/home'})
  },
}
</script>
