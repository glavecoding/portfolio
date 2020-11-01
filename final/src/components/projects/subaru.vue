<template>
    <section class="project_detail">
        <div class="banner"
                :style="{'background':'url('+Project.banner+'),linear-gradient(180deg,rgba(230,1,162,0) 30%,rgba(230,1,162,0.6) 60%,#5400d5)'}">
             <div class="show_case"></div>
                <div class="wrapper-title">
                    <img :src="Project.images.info" alt="" class="subaru_aau">
                    <h1>{{Project.name}}</h1>
                    <ul>
                        <li v-for="tag in Project.tags"><h4>{{tag}}</h4></li>
                    </ul>
                </div>
                
        </div>
        <div class="info">
                <ul>
                    <li>
                        <h3>Roles</h3>
                        <div>
                            <p v-for="text in Project.info.role">{{text}}</p>
                        </div>
                    </li>
                    <li>
                        <h3>Time & Duration</h3>
                        <div>
                            <p v-for="text in Project.info.time">{{text}}</p>
                        </div>
                    </li>
                    <li>
                        <h3>Skills</h3>
                        <div>
                            <p v-for="text in Project.info.skills">{{text}}</p>
                            
                        </div>
                    </li>
                </ul>
        </div>
        <div class="overview" ref="overview">
            <div class="text_area">
                <h2>About Project...</h2>
                <p>SOONPORT is a big screw, nail, steel wires producer & provider exports productions to EU or US. In 2019, they decided to <strong>re-new the old website</strong>, for manage content by themselves and get some other way to touch customer and show products.</p>
                <img :src="Project.images.overview.logo" alt="">
            </div>
            <div class="text_area">
                <h2>User's Problems...</h2>
                <p>“Clients said that they <strong>find the specific product hardly on official</strong>, and they’d like to know the manufacturing.”
                    <br><br>—By Client’s Opinion & SOONPORT</p>
            </div>
        </div>
        <div class="problem" ref="problem">
            <h1>About the problems...</h1>
            <ul>
                <li></li>
            </ul>
        </div>
        <div class="users" ref="users">
            <h1>Target Users & SOONPORT Staff</h1>
            <ul>
                <li></li>
            </ul>
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
        <div class="development" ref="development">
            <div class="text_area">
                <div class="text">
                    <h2>Website Development</h2>
                </div>
                <img :src="Project.images.development.graphic" alt="">
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
                <div class="text_area"><h2>What did I learn ?</h2></div>
            </div>
            <div class="next">
                <div class="text_area"><h2>Keep optimizing & being better</h2></div>
            </div>
        </div>
        <div class="end">
            <div class="go-to">
                <h4>Go to next project</h4>
                <icon_arrow_down/>
            </div>
            <div class="go-to-project">
                <h4>{{Next.name}}</h4>
            </div>
        </div>
    </section>
</template>
<script>
import icon_arrow_down from '../icons/icon_arrow_down'
export default {
    name:'subaru',
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