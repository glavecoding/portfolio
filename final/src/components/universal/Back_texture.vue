<template>
    <section class="bg">
        <div class="v_strip">
        <svg width="12px" height="100vh" v-for="v in Strip.x">
          <rect width="1px" height="100%" class="strip_line_D"/>
          <rect width="11px" height="100%" class="strip_transparent" />
        </svg>
      </div>
      <div class="h_strip">
        <svg width="100vw" height="12px" v-for="h in Strip.y">
          <rect width="100%" height="1px" class="strip_line_D"/>
          <rect width="100%" height="11px" class="strip_transparent" />
        </svg>
      </div>
      <div class="v_strip">
        <svg width="12px" height="100vh" v-for="v in Strip.x">
          <rect width="1px" height="100%" class="strip_line_L"/>
          <rect width="11px" height="100%" class="strip_transparent" />
        </svg>
      </div>
      <div class="h_strip">
        <svg width="100vw" height="12px" v-for="h in Strip.y">
          <rect width="100%" height="1px" class="strip_line_L"/>
          <rect width="100%" height="11px" class="strip_transparent" />
        </svg>
      </div>
    </section>
</template>
<script>
export default {
    name:'bg',
    props:{
      Scanline:Boolean
    },
    data() {
        return {
            Strip:{
                x:0,
                y:0
            }
        }
    },
    mounted() {
        const window_width = Math.floor(window.innerWidth)
        const window_height = Math.floor(window.innerHeight)
        this.Strip.x = new Array(Math.floor(window_width/12)+1)
        this.Strip.y = new Array(Math.floor(window_height/12)+1)
    },
}
</script>