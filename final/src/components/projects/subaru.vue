<template>
    <section class="project_detail" :class="Project.content">
        <div class="banner"
                :style="{'background':'url('+Project.banner+'),linear-gradient(180deg,rgba(230,1,162,0) 30%,rgba(230,1,162,0.6) 60%,#5400d5)'}">
             <div class="show_case"></div>
                <div class="wrapper-title">
                    <img :src="Project.images.info.logo" alt="" class="subaru_aau">
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
                <img :src="Project.images.overview.logo" alt="">
                <h2>“ The design proposal for 2030 new generation and potential SUBARU customer in US market. ”</h2>
                <p>8 designers from 3 different fields, for building a <span>proposal crosses car, service and interior</span>. The project was led by the SUBARU design team from japan, and collaborating with AAU...</p>
            </div>
            <div class="text_area">
                <div class="team">
                    <img :src="Project.images.overview.team" alt="">
                    <div class="content">
                        <div>
                            <h3>TEAM - </h3>
                            <h1>AMPLIFY</h1>
                            <h3 class="sub">"Optimize your abilities"</h3>
                        </div>
                        <div>
                            <p>Product Design - <span>Max, Mitchell, Robert</span></p>
                            <p>Web Design & New Media- <span>Glave, Michael</span></p>
                            <p>Product Design - <span>Feng, Steven, Victoria</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="research" ref="research">
            <div class="title_area gapping">
                <h1>SUBARU 2030 Business Requests</h1>
            </div>
            <div class="text_area subaru_request">
               <h3>Unique “SUBARU ONLY” <br><span>Active Life-Style for Millennial/ Gen. Z</span> customers in 2030</h3>
               <ul>
                   <li><p>What's user's <span>core value</span> in their life ?</p></li>
                   <li><p>How will <span>active life style</span> in 2030 ?</p></li>
                   <li><p>What part of your ideas are <span>"SUBARU ONLY" uniqueness</span> ?</p></li>
               </ul>
            </div>
            <div class="title_area gapping">
                <h1>Analysis & Interview</h1>
            </div>
            <div class="text_area"></div>
            <div class="title_area branding">
                <img :src="Project.images.research.branding" alt="">
                <h3>Branding Analysis</h3>
            </div>
            <div class="text_area branding">
                <ul>
                    <li><h1>Pro</h1></li>
                    <li><h3>Strong Social community + passion pepple</h3></li>
                    <li><h3>The brand has long & cool history </h3></li>
                </ul>
                <ul>
                    <li><h1>Con</h1></li>
                    <li><h3>Lack of sporty car</h3></li>
                    <li><h3>Need cooler style and shape on car or service</h3></li>
                </ul>
            </div>
             <div class="title_area">
                 <img src="" alt="">
                <h3>Interviewing</h3>
            </div>
            <div class="text_area"></div>
            <div class="title_area">
                <h1>What people want in the 2030 ?</h1>
            </div>
            <div class="text_area">
                <img :src="Project.images.research.car_want" alt="">
            </div>
        </div>
        
        <div class="users" ref="users">
            <div class="text_area user_info">
                <h1>SUBARU User in 2030</h1>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="text_area touch_point">
                <h1>Touch Point</h1>
            </div>
            <div class="text_area persona">
                <div class="left">
                    <img :src="Project.images.users.persona" alt="">
                    <ul>
                        <li class="story">
                            <p>Suzi is designer working from home or anywhere she likes. She’d like to find the new place to go and explore the inspiration for her work. Also, she loves to play the game and watch the gaming stream on her device in the free time. In these days, she’s considering to try the more extreme activity, but she feels a bit fear and confused...</p>
                        </li>
                        <li class="title">
                            <h3>Suzi</h3>
                            <p>"I'd like to try something more exciting, but I feel a bit scary"</p>
                        </li>
                    </ul>
                </div>
                <div class="right">
                     <img :src="Project.images.users.persona_info" alt="">
                </div>
            </div>
        </div>
          <div class="explore" ref="explore">
            <h1>How to make the Website fit user's needs more ?</h1>
        </div>
        <div class="ideation" ref="ideations">
            <h1>How to make the Website fit user's needs more ?</h1>
        </div>
        <div class="mockup" ref="mockup">
            <h1>Mockup</h1>
        </div>
        
        <div class="prototyping" ref="prototyping">
           <h1>Prototyping</h1>
        </div>
        <div class="tradeshow" ref="tradeshow">
            <h1>About Trade Show</h1>
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