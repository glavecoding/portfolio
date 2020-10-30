<template>
	<div class="lottie_container" :class="className" ref="animeLottie">
		
	</div>
</template>
<script>
	import lottie from 'lottie-web'
	export default{
		name:'Lottie',
		props:{
			className:String,
			loop:Boolean,
			autoplay:Boolean,
    		animationData:Object,
    		isPaused:Boolean,
		},
		data(){
			return{

			}
		},
		mounted(){
			this.anim = lottie.loadAnimation({
				container:this.$refs.animeLottie,
				renderer: 'svg',
        		loop: this.loop,
        		autoplay: this.autoplay,
        		isPused:this.isPaused,
        		animationData: this.animationData,//json file
            })
            lottie.play()
			// this.anim.addEventListener("DOMLoaded",function(e){
            //       console.log("anim ready")
            //   })
        },
        methods: {
            
        },
	}
</script>