<template>
    <section class="project_detail" :class="Project.content">
        <div class="banner"
            :style="{'background':'url('+Project.banner+'),linear-gradient(180deg,rgba(230,1,162,0) 30%,rgba(230,1,162,0.6) 60%,#5400d5)'}"
            ref="project info"
            >
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
                <h3>The Non-profit organization branding & service proposal, to solve the fake news issue for elder and young generations, including branding guideline, service demo, and research</h3>
                 <img :src="Project.images.overview.logo" alt="">
            </div>
        </div>
        <div class="problem" ref="problem">
            <div class="title_area gapping">
                <h1>Issue of Fake News</h1>
                <p>"Fake News” is not a fresh headline now, Since the 1970s, people have suffered from fake news already. In modern society now, the fake fact is hurting people more and more...</p>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <img :src="Project.images.problem.issue" alt="">
                    </li>
                </ul>
            </div>
            <div class="title_area gapping">
                <h1>How severe<br>it is?</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <img :src="Project.images.problem.severe_01" alt="">
                        <h3>Most people think that <span>they can recognize the fake news</span> but IN FACT...</h3>
                    </li>
                    <li>
                        <img :src="Project.images.problem.severe_02" alt="">
                        <h3>Fake news is spreading in many ways in our society still, and the situation becomes more severe via social media</h3>
                    </li>
                </ul>
            </div>
            <div class="title_area gapping">
                <h1>Who spreads<br>fake news?</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <h3>Baby boomer generations share and spread fake news than young generations <br><br>for More than <span class="more">7.2</span> times</h3>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        
        <div class="users" ref="users">
           <div class="title_area">
                <h2>Who's Lit it for?</h2>
                <ul>
                    <li v-for="(p,key) in persona_array" :class="persona_active == key?'active':''" @click="Switch_persona(key)"><h4>{{p.sort}}</h4></li>
                </ul>
           </div>
            <div class="text_area persona_content"
                v-for="(p,key) in persona_array"
                v-if="persona_active==key">
                <div class="left">
                    <img :src="Project.images.users[p.persona]" alt="">
                    <ul>
                        <li class="story">
                            <p>{{p.story}}</p>
                        </li>
                        <li class="title">
                            <h3>{{p.name}}</h3>
                            <p>“{{p.title}}”</p>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <img :src="Project.images.users[p.persona_info]" alt="">
                </div>
            </div>
        </div>
        <div class="ideation" ref="ideation">
            <div class="title_area">
                <h1>Goal</h1>
            </div>
            <div class="text_area goal">
                <img :src="Project.images.ideation.logo_w" alt="">
                <h3>Let more people know the fake news, fight with the fake news, for keeping the fake news away from next & last generation</h3>
            </div>
            <div class="title_area">
                <h1>How can we help?</h1>
            </div>
            <div class="text_area ideas">
                <ul>
                    <li>
                        <img :src="Project.images.ideation.icon_ngo" alt="">
                        <h3>Non-Profit Organization Branding</h3>
                        <p>Via the branding and the art help, call people's attention, help people avoiding the hurt from fake news</p>
                    </li>
                    <li>
                        <div>
                            <img :src="Project.images.ideation.icon_service_01" alt="">
                            <img :src="Project.images.ideation.icon_service_02" alt="">
                        </div>
                        <h3>Services - Web app, browser extensions</h3>
                        <p>With technologies help, we can recognize the fake news and tell people</p>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h1>Task Flow</h1>
            </div>
            <div class="text_area">
                <img :src="Project.images.ideation.task_flow" alt="">
            </div>
        </div>
        <div class="mockup" ref="mockup">
            <div class="title_area">
                <h2>Moodboard</h2>
            </div>
            <div class="text_area branding_mood">
                <ul>
                    <li>
                        <img :src="Project.images.mockup.moodboard" alt="">
                    </li>
                </ul>
            </div>
             <div class="title_area">
                <h2>Branding</h2>
            </div>
            <div class="text_area branding_case">
                 <ul>
                    <li>
                        <img :src="Project.images.mockup.brand_grid" alt="">
                        <h3>Sketching & Griding Design</h3>
                    </li>
                </ul>
                 <ul>
                    <li>
                        <img :src="Project.images.mockup.brand_text" alt="">
                        <h3>Logo font usage</h3>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img :src="Project.images.mockup.brand_space" alt="">
                        <h3>Logo safe-spacing</h3>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img :src="Project.images.mockup.brand_size" alt="">
                        <h3>Logo sizing usage</h3>
                    </li>
                </ul>
                <ul>
                    <li>
                         <img :src="Project.images.mockup.brand_color" alt="">
                        <h3>Branding color usage</h3>
                    </li>
                </ul>
                <ul>
                    <li>
                         <img :src="Project.images.mockup.brand_icon" alt="">
                        <h3>Branding App icon & icon usage</h3>
                    </li>
                </ul>
                <ul>
                    <li>
                         <img :src="Project.images.mockup.brand_miss" alt="">
                        <h3>Branding miss usage</h3>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h2>Services Design</h2>
            </div>
            <div class="text_area service_mockup">
                <ul>
                    <li>
                        <img :src="Project.images.mockup.layout_wireframe" alt="" class="wireframe">
                        <h3>Website wireframe</h3>
                    </li>
                    
                </ul>
            </div>
            <div class="text_area service_mockup">
                <ul>
                    <li>
                        <img :src="Project.images.mockup.layout_mockup_01" alt="">
                        <h3>Website mockup</h3>
                    </li>
                    
                </ul>
            </div>
            <div class="text_area service_mockup">
                <ul>
                    <li>
                        <img :src="Project.images.mockup.layout_mockup_02" alt="">
                        <h3>Browser extension mockup</h3>
                    </li>
                    
                </ul>
            </div>
            
        </div>
        <div class="prototyping" ref="prototyping">
            <div class="title_area">
                <h1>Service prototyping</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <video autoplay loop controls playsinline :src="Project.images.demo.video" muted></video>
                    </li>
                </ul>
            </div>
        </div>
        <div class="reflection" ref="reflection">
             <GoLink
        :google="'https://docs.google.com/presentation/d/1Hc2iLQYH83LOC1xlE5QbPduLCmF3Y_wGRnp0mQi2ONs/edit#slide=id.gaf0084b23e_0_28'"
        :PDF="'https://www.glaveyen.com/portfolio_pdf/Chin%20Hsien%20Yen%20Portfolio%20Book_%2004799684_WNM_6_litit.pdf'"
      />
            <div class="learn">
                <div class="title_area"><h2>What did I learn ?</h2></div>
                <div class="text_area">
                    <ul>
                        <li>
                            <h3>Design can help</h3>
                            <p>Good branding design can help and call people's attention to solve the issues</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="learn next">
                <div class="title_area"><h2>Where can be better?</h2></div>
                <div class="text_area">
                    <ul>
                        <li>
                            <h3>The real service</h3>
                            <p>If I have more time to go, I will try to develop the service, the browser extension, or the website</p>
                        </li>
                        <li><h3>Clear statement</h3>
                            <p>The branding statement and description can be more clear and simpler to spread, if I have more time to do, I will simply copy text for the elder to understand</p>
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
import GoLink from "./gopresentation"
export default {
    name:'soonport',
    props:{
        Structure:Array,
        Next:Object,
        Project:Object
    },
    components:{
        icon_arrow_down,
        GoLink
    },
    data() {
        return {
            persona_array:[{
                sort:'Baby Boomer',
                name:'Henry',
                title:'I worried my granddaughter will touch fake news, so I checked it then told her',
                story:'Henry is a generous and nice guy, but he’s a bit conservative. He retired from his job 2 years ago. Kids and his wife are working so far from home, so he lives with his granddaughter. He often watches TV and tries some fresh topics on SMS. Sometimes, as he found the interesting topic, he shared the news with his granddaughter, but she seems didn’t like it',
                persona:'persona_01',
                persona_info:'persona_info_01'
            },{
                sort:'Young Generation',
                name:'Tyla',
                title:'Grandpa often send me the fake news, how should I do?',
                story:'Tyla is a dynamic and confident girl. When she gets the news, she will do critical thinking and check it’s real or not. She lives in the information flood world. She likes to share her life on Instagram, and often follow the information from her SMS group and Twitter',
                persona:'persona_02',
                persona_info:'persona_info_02'
            }],
            persona_active:0
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
        },
        Switch_persona(n){
            this.persona_active = n
        }
    },
}
</script>