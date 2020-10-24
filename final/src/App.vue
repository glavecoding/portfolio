<template>
  <div id="app" v-scrolling="Handle_scroll">
    <section class="bg">
    </section>
    
    <router-view/>
    <Panel
      :Show="false"
      v-if="Side_show_rule != 'About'"
    />
    <About_control
      v-if="Side_show_rule != 'About'"
    /> 
    <Side_left
      :Rule="Side_show_rule"
      :Show_top=" Side_show_top"
      :Height="Height"
      :Body_height="Body_height"
      v-if="Side_show_rule != 'About'"
    />
    <Side_right
      v-if="Side_show_rule != 'About'"
    />
  </div>
</template>
<script>
import Panel from './components/universal/Panel'
import About_control from './components/universal/About_control'
import Side_left from './components/universal/Side_left'
import Side_right from './components/universal/Side_right'
export default {
  name:'App',
  components:{
    Panel,
    About_control,
    Side_right,
    Side_left
  },
  data() {
    return {
      Height:0,
      Body_height:0
    }
  },
  mounted() {
    this.Body_height = document.body.scrollHeight
  },
  computed: {
    Side_show_rule(){
      return this.$route.name
    },
    Side_show_top(){
      return this.Body_height - this.Height < this.Body_height/2 ? true:false
    }
  },
  methods: {
    Handle_scroll(e){
      this.Height = Math.floor(window.scrollY)
    }
  },
  watch: {
    
  },
}
</script>