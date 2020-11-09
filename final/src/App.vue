<template>
  <div id="app" :class="Panel.Mode?'light_mode':'dark_mode'" v-scrolling="Handle_scroll">
      <transition appear-active-class="animate__animated animate__fadeIn animate__faster">
      <BG
        v-if="$route"
      />
      </transition>
      <div class="scan" :style="{'opacity':Scanline_control}">

      </div>

    <transition enter-active-class="animate__animated animate__fadeIn animate__faster" :leave-active-class="$route.path == '/'?'animate__animated animate__fadeOutDown animate__fast':'animate__animated animate__fadeOut animate__faster'">
      <router-view>
      </router-view>
    </transition>
    <transition enter-active-class="animate__animated animate__fadeInDown animate__faster" leave-active-class="animate__animated animate__fadeOutUp animate__faster">
      <Logo
        v-if="Side_show_rule == 'Home' || Side_show_rule == 'Open'"
      />
    </transition>
    <transition enter-active-class="animate__animated animate__fadeInDown animate__faster" leave-active-class="animate__animated animate__fadeOutUp animate__faster">
    <Go_back
      v-if="Side_show_rule == 'Project' || Side_show_rule == 'About'"
    />
    </transition>
    <transition enter-active-class="animate__animated animate__fadeInUp animate__faster" leave-active-class="animate__animated animate__fadeOutDown animate__faster">
    <Panel
      v-if="Side_show_rule == 'Project'"
      @Switch_mode="Switch_mode"
      @Switch_language="Switch_language"
    />
    </transition>
    <transition enter-active-class="animate__animated animate__fadeInDown animate__faster" leave-active-class="animate__animated animate__fadeOutUp animate__faster">
    <About_control
      v-if="Side_show_rule == 'Home' || Side_show_rule == 'Project'"
    />
    </transition>
    <Side_left
      :Show_top=" Side_show_top"
      :Height="Height"
      :Body_height="Body_height"
      v-if="Side_show_rule == 'Home'"
    />
    <transition enter-active-class="animate__animated animate__fadeInRight animate__faster" leave-active-class="animate__animated animate__fadeOutRight animate__faster">
    <Side_right
      v-if="Side_show_rule == 'Home' || Side_show_rule == 'Project'"
    />
    </transition>
    <transition enter-active-class="animate__animated animate__fadeInUp animate__faster" leave-active-class="animate__animated animate__fadeOutDown animate__faster">
      <Bottom_scroll
        v-if="Side_show_rule == 'Home' && Hide_scroll"
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
import Logo from './components/universal/Logo'
import Go_back from './components/universal/Go_back'
import {mapState} from 'vuex'
export default {
  name:'App',
  components:{
    Panel,
    About_control,
    Side_right,
    Side_left,
    BG,
    Bottom_scroll,
    Logo,
    Go_back
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
        if(this.$route.name == 'Open' && from.name == 'Home'){
          window.location.reload();
        }
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