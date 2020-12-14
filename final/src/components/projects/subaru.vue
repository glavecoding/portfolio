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
            <div class="title_area  branding">
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
             <div class="title_area gapping interview">
                <h3>WHY/HOW people drive SUBARU?</h3>
                <p>Via interviewing and survey, we found the reason why/how people love SUBARU, we will keep the advantage going and optimizing.</p>
            </div>
            <div class="text_area interview">
                <ul>
                    <li :style="{'backgroundImage':`url(${Project.images.research.interview01})`}">
                        <h4>"Tons of <span>people belong SUBARU</span> will help you to go out and have fun in your car"</h4>
                    </li>
                    <li :style="{'backgroundImage':`url(${Project.images.research.interview02})`}">
                        <h4>"It's a <span>life style</span>, if you're not a part of this then you're missing out big time."</h4>
                    </li>
                    <li :style="{'backgroundImage':`url(${Project.images.research.interview03})`}">
                        
                        <h4>"It's <span>fun</span>, like to have a toy that is <span>very useful</span>,too. Other car is just a car for move, but the SUBARU got me from point A to Z."</h4>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="users" ref="users">
            <div class="text_area user_info">
                <h1>SUBARU User in 2030</h1>
                <ul>
                    <li>
                        <h3>Age 22-32</h3>
                    </li>
                    <li>
                        <h3>Flexible working time & space</h3>
                    </li>
                    <li>
                        <h3>Active & adventurous life style</h3>
                    </li>
                    <li>
                        <h3>Less cars on the road is better</h3>
                    </li>

                </ul>
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
        <div class="ideations" ref="ideations">
            <div class="title_area gapping">
                <h1>What/How the SUBARU will be in 2030?</h1>
            </div>
            <div class="text_area goal">
                <img :src="Project.images.ideation.goal_02" alt="">
                <img :src="Project.images.ideation.goal_01" alt="">
            </div>
            
            <div class="title_area">
                <h1>2030 SUBARU Features</h1>
            </div>
            <div class="text_area feature_customize">
                <ul>
                    <li>
                        <img :src="Project.images.ideation.features_01" alt="">
                    </li>
                </ul>
                 <h3>Car customization</h3>
                <p>Optimizing SUBARU car to fit more request and experience, it makes the car usage more flexibly yet has persoanl style

</p>
            </div>
            <div class="text_area feature_customize">
                <ul>
                    <li>
                        <img :src="Project.images.ideation.features_02" alt="">
                    </li>
                </ul>
                 <h3>Platform for rental</h3>
                <p>As user’s request in 2030, it will reduce amount of car yet offer user unique driving experience to enjoy everytime
</p>
            </div>
            <div class="text_area feature_customize">
                <ul>
                    <li>
                        <img :src="Project.images.ideation.features_03" alt="">
                    </li>
                </ul>
                <h3>Access with SUBARU community & family</h3>
                <p>Connect with the SUBARU strong and active community, keep user exploring the friends and the family with car and family
</p>
            </div>
            <div class="title_area gapping explore">
                <h1>Style & Motion Exploring</h1>
                <p>To explore the cooler operation and style in 2030, we did</p>
            </div>
            <div class="text_area exploring">
                <ul>
                    <li>
                        <img :src="Project.images.ideation.explore_01" alt="">
                        <img :src="Project.images.ideation.explore_02" alt="">
                        <img :src="Project.images.ideation.explore_03" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="mockup" ref="design">
            <div class="title_area">
                <h2>Wireframe & Explore</h2>
            </div>
            <div class="text_area wireframe">
                <ul>
                    <li class="first after">
                        <img :src="Project.images.design.wireframe" alt="">
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h2>Mockup</h2>
            </div>
            <div class="text_area mockup_design">
                 <ul v-for="(fl,key) in Array(3)">
                    <li :class="key==0?'first':key==2?'after':''">
                        <img :src="Project.images.design['final_'+(key+1)]" alt="">
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h2>Prototyping</h2>
            </div>
            <div class="text_area prototype_design">
                 <ul>
                    <li class="first after">
                        <video autoplay controls muted playsinline loop :src="Project.images.design.demo"></video>
                    </li>
                </ul>
                <ul>
                    <li class="first after">
                        <video autoplay controls muted playsinline loop :src="Project.images.design.demo_steer"></video>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h2>Style Guide</h2>
            </div>
            <div class="text_area styleguide">
                 <ul v-for="(sg,key) in Array(7)">
                    <li :class="key==0?'first':key==6?'after':''">
                        <img :src="Project.images.design['sg_'+key]" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="tradeshow" ref="tradeshow">
            <div class="title_area">
                <h1>AAU Spring Trade Show</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li class="trade_consistency">
                        <img :src="Project.images.tradeshow.t_help" alt="">
                        <h3>Solution for consistensy issue</h3>
                        <p>Before the tradeshow, we got the consistency issue because each team used different prototyping software to demo. To fix the issue, I made a web-base showcase for every team to demo the prototyping.</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div class="image_box">
                            <img :src="Project.images.tradeshow['t_'+(key+1)]" alt="" v-for="(t,key) in Array(3)">
                        </div>
                        <h3>Trade Show</h3>
                        <p>In spring show, we presented our service, car and whole concept to visitors who were interested in our project.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="reflection" ref="reflection">
            <div class="learn next">
                <div class="title_area"><h2>What did I learn ?</h2></div>
                <div class="text_area">
                    <ul>
                        <li>
                            <h3>Real business</h3>
                            <p>In this project, from client, design flow, to the tradeshow, all of above are about business, we couldn't make the decision without business side consideration.</p>
                        </li>
                        <li>
                            <h3>Tell Story</h3>
                            <p>To sell the concept to non-exist customers(they are in 2030), we have to tell the story passionately, no matter the function and the shape, everything should be amazing and pretty.</p>
                        </li>
                        <li>
                            <h3>Team work</h3>
                            <p>Team work is amazing! I learned that communication is the bigger issue in the team, if everyone in the team can talk, it's easy to solve the bigger and bigger problem.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="learn">
                <div class="title_area"><h2>Where can be better?</h2></div>
                <div class="text_area">
                    <ul>
                        <li>
                            <h3>Solid user research</h3>
                            <p>If there’s more time for doing project, we would do more user research and interview to make car dashboard and App service fit user’s request more.</p>
                        </li>
                        <li>
                            <h3>More gaming experience</h3>
                            <p>Our car driving and app using experience is the gaming style already, but we can give more contest or real gaming experience like driving leader board or exploration goal</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="end">
            <div class="go-to" @click="Go_project({...Next})">
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
    methods: {
        Go_project(next){
            this.$router.push({path:`/project/${next.order}/${next.name}`})
        }
    },
}
</script>