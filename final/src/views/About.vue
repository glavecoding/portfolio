<template>
  <div class="about">
    <Go_back
    />
    <div class="project_area">
      <div class="text_area">
      <div class="text">
        <h1>Hi, I'm Glave Yen,</h1>
      <p>Project overview - Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="contact">
        <ul>
          <li>
            <img :src="images.about.linkedin" alt="">
          </li>
          <li>
            <img :src="images.about.medium" alt="">
          </li>
          <li>
            <img :src="images.about.github" alt="">
          </li>
        </ul>
        <icon_arrow_down
          :Auto="true"
        />
        <h3>FIND ME HERE</h3>
      </div>
      </div>
      <transition appear appear-active-class="animate__animated animate__fadeInRight animate__faster">
        <img :src="images.about.profile" alt="">
      </transition>
      <transition appear appear-active-class="animate__animated animate__fadeInLeft animate__faster">
         <div class="mask"/>
      </transition>
      <h4 data-text="Exploring the land unknown, crafting the mind and idea to real">Exploring the land unknown, crafting the mind and idea to real</h4>
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
      From:null
    }
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
    
  }
}
</script>