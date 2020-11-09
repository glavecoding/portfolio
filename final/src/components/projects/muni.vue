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
                    <!-- <li>
                        <h4>User don't know how to <br>use ticket / trip planner / find schedule.</h4>
                    </li> -->
                    <li>
                        <h4>It takes many unnecessory steps to use/buy tickets.</h4>
                    </li>
                    <li>
                        <h4>User has to find the route by memerizing and typing both stop & route name</h4>
                    </li>
                    <li>
                        <h4>Jumping out to other app while user uses schedule function</h4>
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
                <h3>What are Competitors Doing?</h3>
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
           <div class="user_info">
               <div class="title_area">
                    <h2>Who uses MUNI service?</h2>
                </div>
                <div class="text_area">
                    <ul>
                        <li>
                            <img :src="Project.images.users.icon_age" alt="">
                            <div>
                                <h3>Age<br>25-34</h3>
                                <p></p>
                            </div>
                        </li>
                        <li>
                            <img :src="Project.images.users.icon_commute" alt="">
                            <div>
                                <h3>Commuting purpose</h3>
                                <p></p>
                            </div>
                        </li>
                        <li>
                            <img :src="Project.images.users.icon_switch" alt="">
                        <div>
                            <h3>Switch 2-3 times in Journey</h3>
                            <p></p>
                        </div>
                        </li>
                        <li>
                            <img :src="Project.images.users.icon_journey" alt="">
                            <div>
                                <h3>1 person only in Journey</h3>
                                <p></p>
                            </div>
                        </li>
                        <li>
                            <h2>Uer's pain points</h2>
                            <div>
                                <h4>New user has to take long time to learn how to use</h4>
                                <h4>Time wasting to find the service in complex navigation</h4>
                                <h4>Hard to find the stop/route/time as user needs it</h4>
                            </div>
                        </li>
                    </ul>
                </div>
           </div>
            <div class="persona">
                <div class="left">
                    <img :src="Project.images.users.persona" alt="">
                    <ul>
                        <li class="story">
                            <p>Johnna is a barista working in downtown but live in suburbs San Francisco. Every morning Johnna has to go to work before 9 am by MUNI. He uses cheaper ticket on app, but he often got confusion with the schedule function and trip planner, he has to switch from one app to another. While he first used the app, he didn’t even find the ticket to buy.</p>
                        </li>
                        <li class="title">
                            <h3>Johnna</h3>
                            <p>“I want to know information about train more quickly as I need.”</p>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <img :src="Project.images.users.persona_info" alt="">
                </div>
            </div>
        </div>
        <div class="ideation" ref="ideation">
            <div class="title_area">
                <h1>Goal - Making MUNI App better</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <img :src="Project.images.ideations.goal_ticket" alt="">
                        <h3>Smarter Ticket Using/Buying</h3>
                        <p>Making the core function - ticket using smarter and faster is important for user while they meet the rush hour.</p>
                    </li>
                    <li>
                        <img :src="Project.images.ideations.goal_time" alt="">
                        <h3>Optimizing<br> Trip Planner & Schedule</h3>
                        <p>Never find the route or stop by name in user's brain. Doing the route/stop searching and check the time at the same time is the better idea.</p> 
                    </li>
                    <li>
                        <img :src="Project.images.ideations.goal_ui" alt="">
                        <h3>Simpler usage/UI in rush hour</h3>
                        <p>In rush hour, user need clear and simple click-and-use serive to save their life, not the multiple layer or finding funciton in sidebar</p>
                    </li>
                </ul>
            </div>
            
        </div>
        <div class="optimization" ref="optimization">
            <div class="title_area gapping">
                <h1>Application Optimization</h1>
            </div>
            <div class="text_area"></div>
            <div class="title_area">
                <h3>Save <span>53%</span> time to buy & use ticket</h3>
            </div>
            <div class="text_area"></div>
            <div class="title_area">
                <h3>Searching direction & time immediately</h3>
            </div>
            <div class="text_area"></div>
            <div class="title_area">
                <h3>More Clear & Affordable Information</h3>
            </div>
            <div class="text_area"></div>
            <div class="title_area gapping">
                <h1>POP Testing & Findings</h1>
                <p>Wireframe and POP</p>
            </div>
            <div class="text_area">
                <img src="" alt="">
                <img src="" alt="">
            </div>
            <div class="title_area">
                <h3>Ticket Flow</h3>
            </div>
            <div class="text_area">
                <ul>
                    <li><h3>Can be better</h3></li>
                </ul>
            </div>
            <div class="title_area">
                <h3>Trip/Schedule Flow</h3>
            </div>
            <div class="text_area">
                <ul>
                    <li> <h3>Can be better</h3></li>
                </ul>
            </div>
        </div>
        <div class="mockup" ref="mockup">
            <div class="title_area">
                <h1>Visual Guide</h1>
            </div>
            <div class="text_area">

            </div>
            <div class="title_area">
                <h1>Iterations & Mockup</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <h3>Ticket Usage</h3>
                    </li>
                    <li>
                        <h3>Ticket purchasement</h3>
                    </li>
                    <li>
                        <h3>Trip Planner</h3>
                    </li>
                    <li>
                         <h3>Schedule</h3>
                    </li>
                </ul>
            </div>
        </div>
        <div class="prototyping" ref="prototyping">
           <div class="title_area gapping">
               <h1>HTML/CSS/JS Prototyping</h1>
               <p>Comparing with normal prototyping made by software, coding prototyping can show more.</p>
           </div>
           <div class="text_area">

           </div>
           <div class="title_area">
               <h1>Final Prototyping Demo</h1>
           </div>
           <div class="text_area">
               <video src=""></video>
           </div>
        </div>
        <div class="reflection" ref="reflection">
            <div class="learn">
                <div class="text_area"><h2>What did I learn ?</h2></div>
            </div>
            <div class="next">
                <div class="text_area"><h2>Where can be better?</h2></div>
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