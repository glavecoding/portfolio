<template>
    <section class="project_detail">
        <div class="overview" ref="overview">
            <div class="text_area">
                <h2>About Project...</h2>
                <p>SOONPORT is a big screw, nail, steel wires producer & provider exports productions to EU or US. In 2019, they decided to <strong>re-new the old website</strong>, for manage content by themselves and get some other way to touch customer and show products.</p>
            </div>
            <div class="text_area">
                <h2>User's Problems...</h2>
                <p>“Clients said that they find the specific product hardly on official, and they’d like to know the manufacturing.”
                    <br><br>—By Client’s Opinion & SOONPORT</p>
            </div>
        </div>
        <div class="problem" ref="problem">
            <h1>Where’s the problem?</h1>
        </div>
        <div class="ideation" ref="ideation">
            <h1>How to make the Website fit user's needs more ?</h1>
        </div>
        <div class="optimization" ref="optimization">
            <h1>Optimizing Website...</h1>
        </div>
        <div class="mockup" ref="mockup">
            <h1>Mockup</h1>
        </div>
        <div class="prototyping" ref="prototyping">
           <h1>Prototyping</h1>
        </div>
        <div class="production" ref="production">
            <div class="text_area">
                <div class="text">
                    <h2>Website Production</h2>
                </div>
                <img :src="Project.images.production" alt="">
            </div>
        </div>
        <div class="planning" ref="planning">
            <h1>Planning</h1>
        </div>
        <div class="issue" ref="issue">
            <h1>Issue</h1>
        </div>
        <div class="reflection" ref="reflection">
            <div class="learn">
                <h2>What did I learn?</h2>
            </div>
            <div class="next">
                <h2>What's next?</h2>
            </div>
        </div>
        <div class="end">
            <div class="go-to">
                <icon_arrow_down/>
                <h4>Go to next project:</h4>
            </div>
            <div class="go-to-project">
                <h3>{{Next.name}}</h3>
            </div>
        </div>
    </section>
</template>
<script>
import icon_arrow_down from '../icons/icon_arrow_down'
export default {
    name:'soonport',
    props:{
        Structure:Array,
        Next:Object,
        Project:Object
    },
    components:{
        icon_arrow_down
    },
    data() {
        return {
        }
    },
    mounted() {
        const ref_arr = this.Structure.map(item=>{
            return {
                name:item,
                height:this.$refs[item].offsetTop
            }
        })
        this.$emit('ref_list',ref_arr)
    },
}
</script>