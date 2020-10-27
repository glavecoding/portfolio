<template>
  <div class="about">
    <Go_back
    />
    <div class="text_area">
      <h1>Glave Yen</h1>
    </div>
  </div>
</template>
<script>
import Go_back from '../components/universal/Go_back'
export default {
  name:'About',
  data() {
    return {
      From:null
    }
  },
  components:{
    Go_back
  },
  methods: {
    
  }
}
</script>