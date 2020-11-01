<template>
    <div class="wrapper_logo">
        <!-- <svg x="0px" y="0px" 
             viewBox="0 0 200 240" style="enable-background:new 0 0 169.8 225.4;" xml:space="preserve" class="svg_logo">
            <polygon class="st4" points="63.7,112.7 84.9,84.5 106.1,112.7 84.9,140.9 "/>
            <polygon class="st1" points="63.7,112.7 84.9,84.5 106.1,112.7 84.9,140.9 "/>
            <polygon class="st0" points="74.3,70.4 53.1,42.3 0,112.7 53.1,183.1 74.3,154.9 42.5,112.7 "/>
            <polygon class="st0" points="63.7,28.2 84.9,0 169.8,112.7 84.9,225.4 63.7,197.2 127.4,112.7 "/>
        </svg> -->
        <Lottie
            :autoplay="true"
            :loop="true"
            :isPaused="false"
            :animationData="Lottie"
            :className="$route.name=='Open'?'':'lottie_class'"
        />
    </div>
</template> 
<script>
import Lottie from './Lottie'
import {mapState} from 'vuex'
export default {
    components:{
        Lottie
    },
    computed: {
        ...mapState('universal',[
            'Lottie'
        ])
    },
    data() {
        return {
        }
    },
}
</script>