<template>
  <div class="about">
    <div class="project_area">
      <div class="text_area">
      <div class="text">
        <h1 v-html="typing" :class="typing.length != origin.length?'flicking':''"></h1>
        <transition enter-active-class="animate__animated animate__fadeInUp animate__fast">
          <p v-if="typing.length == origin.length">As a UI/UX engineer, I passionate about bridging design, engineer, and user’s needs, Solving the human-centered problem, and actualizing the design in the real world.</p>
        </transition>
      </div>
      <transition enter-active-class="animate__animated animate__fadeInUp animate__fast">
      <div class="contact" v-if="typing.length == origin.length">
        <ul>
          <li @click="Go_link('./static/resume/Resume_CV.pdf')">
            <h2>CV</h2>
          </li>
          <li @click="Go_link('https://www.linkedin.com/in/glavedesign')">
            <img :src="images.about.linkedin" alt="">
          </li>
          <li @click="Go_link('https://medium.com/@glavecoding')">
            <img :src="images.about.medium" alt="">
          </li>
          <li @click="Go_link('https://github.com/glavecoding')">
            <img :src="images.about.github" alt="">
          </li>
          
        </ul>
        <icon_arrow_down
          :Auto="true"
        />
        <h3>FIND ME HERE</h3>
      </div>
      </transition>
      </div>
      <transition appear appear-active-class="animate__animated animate__fadeInUp">
        <img :src="images.about.profile" alt="">
      </transition>
         <div class="mask" v-if="typing.length == origin.length">
           <div>
             <h1 data-text="顏">顏</h1>
             <h1 data-text="欽">欽</h1>
             <h1 data-text="賢">賢</h1>
           </div>
         </div>
      <transition appear appear-active-class="animate__animated animate__fadeInDown">
      <h4 data-text="Exploring the land unknown, crafting more than enough">Exploring the land unknown, crafting more than enough</h4>
      </transition>
    </div>
    
  </div>
</template>
<script>
import icon_arrow_down from '../components/icons/icon_arrow_down'
import Go_back from '../components/universal/Go_back'
import {mapState} from 'vuex'
export default {
  name:'About',
  data() {
    return {
      origin:"Hi, I'm Glave Yen,",
      typing:"",
      target:0,
      timer:null
    }
  },
  mounted(){
    this.origin = this.origin.split("")
  },
  components:{
    Go_back,
    icon_arrow_down
  },
  computed: {
    ...mapState('universal',[
      'images',
    ])
  },
  methods: {
    Go_link(Link){
      window.open(Link,'_blank')
    }
  },
  watch:{
    origin:{
      handler(){
        setTimeout(()=>{
          this.timer = setInterval(()=>{
          this.typing += this.origin[this.target]
          this.target += 1
        },Math.random(1)*50 + 50)
        },800)
      }
    },
    typing:{
      handler(){
        if(this.typing.length == this.origin.length){
          clearInterval(this.timer)
          this.timer = null
          this.target = 0
        }
      }
    }
  }
}
</script>