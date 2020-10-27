<template>
  <div id="app" :class="Panel.Mode?'light_mode':'dark_mode'" v-scrolling="Handle_scroll">
    <BG
    />
    <div class="scan" :style="{'opacity':Scanline_control}">

    </div>
    <transition enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
      <router-view/>
    </transition>
    
    <Panel
      :Show="false"
      v-if="Side_show_rule != 'About'"
      @Switch_mode="Switch_mode"
      @Switch_language="Switch_language"
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
    <transition enter-active-class="animate__animated animate__fadeInUp animate__faster" leave-active-class="animate__animated animate__fadeOutDown animate__faster">
      <Bottom_scroll
        v-if="Side_show_rule != 'About' && Hide_scroll"
      />
    </transition>


  </div>
</template>
<script>
import Panel from './components/universal/Panel'
import About_control from './components/universal/About_control'
import Side_left from './components/universal/Side_left'
import Side_right from './components/universal/Side_right'
import BG from './components/universal/Back_texture'
import Bottom_scroll from './components/universal/Bottom_scroll'
export default {
  name:'App',
  components:{
    Panel,
    About_control,
    Side_right,
    Side_left,
    BG,
    Bottom_scroll
  },
  data() {
    return {
      Height:0,
      Body_height:0,
      Scan:true,
      Hide_scroll:true,
      Panel:{
        Mode:false,
        Language:false
      }
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
    },
    Scanline_control(){
      return this.$route.nmae =='Project'? 0:1-(this.Height/window.innerWidth)
    }
  },
  methods: {
    Handle_scroll(e){
      this.Height = Math.floor(window.scrollY)
    },
    Switch_mode(){
      this.Panel.Mode = !this.Panel.Mode
    },
    Switch_language(){
      this.Panel.Language = !this.Panel.Language
    },
  },
  watch: {
    $route:{
      handler(to,from){
      }
    },
    Height:{
      handler(){
        
        this.Hide_scroll = this.Height> 100 ? false:true
      }
    }
  },
}
</script>