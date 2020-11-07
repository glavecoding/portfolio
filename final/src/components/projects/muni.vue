<template>
    <section class="project_detail" :class="Project.content">
        <div class="banner"
                :style="{'background':'url('+Project.banner+'),linear-gradient(180deg,rgba(230,1,162,0) 30%,rgba(230,1,162,0.6) 60%,#5400d5)'}">
             <div class="show_case"></div>
                <div class="wrapper-title">
                    <h1>{{Project.name}}</h1>
                    <ul>
                        <li v-for="tag in Project.tags"><h4>{{tag}}</h4></li>
                    </ul>
                </div>
                <div class="slide_case">
                    <img :src="Project.images.info.info_case" alt="">
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
                <h3>“MUNI is the biggest public transportation in Bay Area. The MUNI Mobile App is the service to offer tickets buying, trip planner and schedule app to help MUNI rider using MUNI, but <span>the App on App store is 3 star rating and have some complaints</span> on it... ”</h3>
                <img :src="Project.images.overview.logo" alt="">
            </div>
        </div>
        <div class="problem" ref="problem">
            <div class="title_area gapping">
                <h1>Finding problems in original App</h1>
            </div>
            <div class="title_area">
                <ul>
                    <li>
                        <img :src="Project.images.problem.origin_01" alt="">
                    </li>
                    <li>
                        <div class="test_link"></div>
                    </li>
                    <li>
                        <img :src="Project.images.problem.origin_02" alt="">
                    </li>    
                </ul>
                <h3>User Testing &  Findings</h3>
            </div>
            <div class="text_area">
                <ul>
                    <li><h3>Pro</h3></li>
                    <li>
                        <h4>User like the cheaper ticket purchasing on the application.</h4>
                    </li>
                </ul>
                
                <ul>
                    <li>
                        <h3>Con</h3>
                    </li>
                    <li>
                        <h4>User got confused or stuck on ticket purchasing flow.</h4>
                    </li>
                    <li>
                        <h4>User don't know how to <br>use ticket / trip planner / find schedule.</h4>
                    </li>
                    <li>
                        <h4>It takes many unnecessory steps to use/buy tickets.</h4>
                    </li>
                    <li>
                        <h4>User has to find the route by memerizing and typing both stop & route name</h4>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <ul class="competitor">
                    <li>
                        <img :src="Project.images.problem.competitor_01" alt="">
                    </li>
                    <li>
                        <img :src="Project.images.problem.competitor_02" alt="">
                    </li>
                    <li>
                        <img :src="Project.images.problem.competitor_03" alt="">
                    </li>
                </ul>
                <h3>Competitors Analysis</h3>
            </div>
            <div class="text_area">
                <ul>
                    <li><h3>Features</h3></li>
                    <li><h4>There is the map view in competitor's service to show the route and direction.</h4></li>
                    <li><h4>Instead of typing stop or route name, competitor's service uses search function to help user.</h4></li>
                </ul>
            </div>
        </div>
        <div class="users" ref="users">
            <h1>Target Users</h1>
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
    name:'muni',
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
            console.log(document.querySelector('.'+item).offsetTop)
            return {
                name:item,
                height:this.$refs[item].offsetTop
            }
        })
        this.$emit('ref_list',ref_arr)
    },
    beforeDestroy(){
        this.$emit('reload','')
    }
}
</script>