<template>
  <div class="Opening">
    <transition appear appear-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
      <div class="loading">
        <h3>{{loading}}%</h3>
        <div>
          <p>[</p>
          <div :style="{width:loading*2+'px'}"></div>
          <p>]</p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Open',
  components: {
   
  },
  data() {
    return {
      loading:0,
      timer:null
    }
  },
  mounted() {
    setTimeout(()=>{
      this.timer = setInterval(()=>{
        this.loading += 1
      },32)
    },200)
    setTimeout(()=>{
      this.$router.push({path:'/home'})
    },4500)
  },
  watch: {
    loading(){
      if(this.loading == 100){
        clearInterval(this.timer)
      }
    }
  },
  beforeDestroy(){
      clearInterval(this.timer)
  }
}
</script>
