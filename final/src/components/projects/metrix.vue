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
            <div class="overview_area">
                <img :src="Project.images.overview.logo" alt="">
                <h3>METRIX System can help UX designers <span>build & manage testing</span> prototyping and collect real quantative testing result from bigger tester group, then compare the data between different test cases. </h3>
                
            </div>
            <img :src="Project.images.overview.show_case" alt="">
            <div class="team_area">
                <div>
                    <img :src="Project.images.overview.team" alt="">
                     <h2>About Team</h2>
                    <p>In this project, I worked with a UI/UX designer Zee Liu to make the job went faster. Primarily, I <span>developed the webview system and the testing case</span> part and gave the team opinions about UI/UX and technical estimations.</p>
                </div>
            </div>
            <div class="problem_area">
                <h1>Issues</h1>
                <h3>Besides user task observations, how can UX designers implement testing for <span>bigger tester groups</span> with the <span>quantitative testing result</span> that supports our design decisions?</h3>
            </div>
        </div>
        <div class="research" ref="research">
            <div class="title_area gapping">
                <h1>Idea, MVP, Survey</h1>
            </div>
            <div class="text_area">

            </div>
            <div class="title_area">
                <h3>Ideas</h3>
                <p>In the early stage, we found that </p>
            </div>
            <div class="text_area">
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="title_area">
                <h3>Concept Demo - Minimum model</h3>
                <p>To verify the concept idea, I made the quick development model and used google sheet as database to test the concept.</p>
            </div>
            <div class="text_area kickoff">
                <ul>
                    <li class="concept">
                        <img :src="Project.images.research.concept" alt="">
                        <h4>Quick minimum<br>web-app</h4>
                    </li>
                    <li class="link"></li>
                    <li class="gsheet">
                        <div class="image_box">
                            <img :src="Project.images.research.gas_logo" alt="">
                            <img :src="Project.images.research.gsheet" alt="">
                        </div>
                        <h4>Quick Database - GAS + Google Sheet</h4>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h3>Survey & Interview</h3>
                <p>To know that what the actual function and sort of testing result will designer want, we did the interview and quick interview.</p>
            </div>
            <div class="text_area survey">
                <ul>
                    <li>
                        <img :src="Project.images.research.low_testing" alt="">
                        <h4>User testing with low-fidelity paper prototype</h4>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img :src="Project.images.research.survey_01" alt="">
                        <!-- <h4>What's the proper way to show data</h4> -->
                    </li>
                    <li>
                        <img :src="Project.images.research.survey_02" alt="">
                        <h4 class="survey_text">Survey what function and testing data will designers want</h4>
                    </li>
                    <li>
                        <img :src="Project.images.research.survey_03" alt="">
                        <!-- <h4>What type of data do designers care</h4> -->
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h1>Key Findings</h1>
            </div>
            <div class="text_area findings">
                <ul>
                    <li>
                        <img :src="Project.images.process.icon_group" alt="">
                        <h3>Designers'd like to <span>test more testers</span> as they can</h3>
                    </li>
                    <li>
                        <img :src="Project.images.process.icon_analystic" alt="">
                        <h3>If there's the <span>easy</span> way to go, <span>collecting the quantative testing data</span> is better.</h3>
                    </li>
                    <li>
                        <h3>The data which designers are <span>interested</span> in more</h3>
                        <div class="data_list">
                            <p>Finished rate of task</p>
                            <p>Clicks and positions on screen</p>
                            <p>How long does a user stay on each screen</p>
                            <p>User's comment</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="users" ref="users">
            <div class="title_area persona_title">
                <h2>Who's METRIX focusing?</h2>
            </div>
            <div class="title_area persona_content">
                <div class="left">
                    <img :src="Project.images.users.persona" alt="">
                    <ul>
                        <li class="story">
                            <p>Emily is a junior UX designer, she’d like to know more about user’s reaction and behaviors during user testing, but the only she can do is do the observation, see where did user click on and ask them some question. Sometimes, she minds that maybe there is a tool to do it all easily...</p>
                        </li>
                        <li class="title">
                            <h3>Emily</h3>
                            <p>“I want to know information about train more quickly as I need.”</p>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <img :src="Project.images.users.persona_info" alt="">
                </div>
            </div>
        </div>
        <div class="process" ref="process">
            <div class="title_area  gapping">
                <h1>Goal of METRIX</h1>
            </div>
            <div class="text_area goal">
                <h3>Provide designers intuitive prototype usability validation by collecting and analyzing variables representing testers' interactive behaviors.</h3>
                <img :src="Project.images.process.logo" alt="">
            </div>
            <div class="title_area gapping">
                <h1>Process</h1>
            </div>
            <div class="text_area"></div>
            <div class="title_area">
                <h3>Design & Development Sprint</h3>
                <p>We made the sprint in project flow to verify the idea to production smoothly and fastly.</p>
            </div>
            <div class="text_area">
                <img :src="Project.images.process.sprint" alt="">
            </div>
            <div class="title_area dilemma_title">
                <img :src="Project.images.process.icon_dilemma" alt="">
                <h3>Dilemma</h3>
                <p>We started this project envisioning a prototype editor web app that helps designers collecting and organizing testing data. With this initiative, we ran into a cluster of problems...</p>
            </div>
            <div class="text_area dilemma">
                <ul>
                    <li>
                        <img :src="Project.images.process.toomany" alt="">
                        <h3>The implementation of the process of prototyping and hotspot editing is <span>not easy for beginners</span></h3>
                    </li>
                    <li>
                        <img :src="Project.images.process.techissue" alt="">
                        <h3>To support user scenarios that demand multiple hotspots, backtracking, and complex task flows, <span>we have to address numerous technical issues</span></h3>
                    </li>
                </ul>
            </div>
            <div class="title_area decision_title">
                <img :src="Project.images.process.icon_decision" alt="">
                <h3>Decisions</h3>
                <p> </p>
            </div>
            <div class="text_area decision">
                <ul>
                    <li>
                        <div>
                            <img :src="Project.images.process.figma_logo" alt="">
                            <h2>X</h2>
                            <img :src="Project.images.process.logo" alt="">
                        </div>
                        <h3>Instead of implementing prototyping functions, we found out Figma, and its developer-friendly API is the most efficient and assuring solution to the problem. Why?</h3>
                        
                    </li>
                    <li>
                        <h4>The using flow in service is <span>more friendly for beginners</span></h4>
                        <h4>More and more designers are <span>utilizing Figma as their primary prototyping tool</span></h4>
                        <h4>The Figma developer-friendly API dramatically <span>increases the productivity and quality</span> of the development of this project</h4>
                    </li>
                </ul>
            </div>
            
            <div class="title_area">
                <h1>Features</h1>
            </div>
            <div class="text_area features">
                <ul>
                    <li>
                        <div><img :src="Project.images.process.icon_figma" alt=""><img :src="Project.images.process.icon_manage" alt=""></div>
                        <h3>Build and manage the testing prototype with Figma</h3>
                    </li>
                    <li>
                        <div><img :src="Project.images.process.icon_analystic" alt=""><img :src="Project.images.process.icon_comment" alt=""></div>
                        <h3>Collecting quantative user testing data and user's comments</h3>
                    </li>
                    <li>
                        <div><img :src="Project.images.process.icon_anb" alt=""></div>
                        <h3>Visualizing & comparing user testing result</h3>
                    </li>
                </ul>
            </div>
            <div class="title_area gapping">
                <h1>System Structure</h1>
            </div>
            <div class="text_area">
               
            </div>
            <div class="title_area">
                <h3>Sitemap of service</h3>
                <p></p>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <img :src="Project.images.process.sitemap" alt="">
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h3>Task flow - <br>Project Management</h3>
                <p></p>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <img :src="Project.images.process.task_project" alt="">
                    </li>
                    <li>
                        <h3></h3>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h3>Task flow - <br>Testing Management</h3>
                <p></p>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <img :src="Project.images.process.task_test" alt="">
                    </li>
                    <li>
                        <h3></h3>
                    </li>
                </ul>
            </div>
        </div>
        <div class="design" ref="design">
            <div class="title_area">
                <h2>Style Referance</h2>
            </div>
            <div class="text_area referance">
                <ul>
                    <li>
                        <img :src="Project.images.design.assets_logo" alt="">
                        <p>Logo</p>
                    </li>
                    <li>
                        <img :src="Project.images.design.assets_icon" alt="">
                        <p>Icons</p>
                    </li>
                    <li>
                        <img :src="Project.images.design.assets_graphic" alt="">
                        <p>Status Graphic</p>
                    </li>

                </ul>
            </div>
            <div class="title_area">
                <h2>Style referance for pages</h2>
            </div>
            <div class="text_area pages">
                <ul>
                    <li>
                        <div>
                            <h4><span>Projects</span> - <br>Manage project and prototype with Figma</h4>
                        </div>
                        <div class="page_frame">
                            <img :src="Project.images.design.ref_project" alt="">
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4><span>Analystics & Comparison</span> - <br>Manage & Show testing results by heatmap & chart</h4>
                        </div>
                        
                        <div class="page_frame">
                            <img :src="Project.images.design.ref_analystic" alt="">
                        </div>
                    </li>
                    <li>
                       <div>
                            <h4><span>Comparison</span> - <br>A/B projects comparison</h4>
                       </div>
                        <div class="page_frame">
                            <img :src="Project.images.design.ref_compare" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="development" ref="development">
            <div class="text_area">
                <div class="text">
                    <h2>METRIX Service Development</h2>
                    <p>To develop functions of prototyping management and testing result showcase, I used Vue.js to connect the Figma API and Firebase database, let user manage the user testing intuitively and easily.</p>
                </div>
                <img :src="Project.images.development.graphic" alt="">
            </div>
        </div>
        <div class="conflict" ref="techniques">
            <div class="title_area">
                <h1>Techniques</h1>
            </div>
            <div class="text_area techniques">
                <div>
                     <h4>METRIX Management</h4>
                </div>
                <ul>
                    <li>
                       <p>Vue.js</p>
                       <p>HTML/SCSS/JS</p>
                    </li>
                    <li>
                        <p>Chart.js</p>
                        <p>Figma API</p>
                        <p>Firebase API</p>
                    </li>
                </ul>
                <div>
                    <h4>METRIX Testing Case</h4>
                </div>
                <ul>
                    <li>
                        <p>HTML/SCSS</p>
                        <p>Vue.js</p>
                    </li>
                    <li>
                        <p>Figma API</p>
                        <p>Firebase API</p>
                    </li>
                </ul>
                 <div>
                     <h4>METRIX Concept Demo</h4>
                </div>
                <ul>
                    <li>
                       <p>Vue.js</p>
                       <p>HTML/SCSS/JS</p>
                    </li>
                    <li>
                        <p>Google Apps Script</p>
                        <p>Google Sheet</p>
                    </li>
                </ul>
            </div>
            <div class="title_area gapping">
                <h1>Features & Issue</h1>
            </div>
            <div class="text_area">

            </div>
            <div class="title_area">
                <h3>Technical Features</h3>
            </div>
            <div class="text_area tech_features">
                <ul>
                    <li>
                        <img :src="Project.images.development.heatmap" alt="">
                        <h3><span>Heatmap</span> - Show user's behabior intuitively</h3>
                    </li>
                    <li>
                        <img :src="Project.images.development.chart" alt="">
                        <h3><span>Chart</span> - Visualize the testing result real time</h3>
                    </li>
                    <li>
                        <img :src="Project.images.development.comparison" alt="">
                        <h3><span>Project & Pages Comparison</span> - Evaluting design with user testing</h3>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h3>Design vs Programming</h3>
            </div>
            <div class="text_area conflict_dnd">
                <ul>
                    <li>
                        <div>
                            <img :src="Project.images.development.limit_design" alt="">
                            <img :src="Project.images.development.limit_arrow" alt="">
                            <img :src="Project.images.development.limit_actual" alt="">
                        </div>
                        <h3>Style limitations</h3>
                        </li>
                    
                    <li>
                        <div class="dnd">
                            <img :src="Project.images.development.focus_style" alt="">
                            <img :src="Project.images.development.focus_arrow" alt="">
                            <img :src="Project.images.development.focus_structure" alt="">
                        </div>
                        <h3>Focus differ</h3>
                    </li>
                </ul>
            </div>
        </div>
        <div class="demo" ref="demo">
            <div class="title_area service_demo_title">
                <h1>Service Demo</h1>
            </div>
            <div class="text_area service_demo">
                <ul>
                    <li>
                        <video controls autoplay loop :src="Project.images.development.demo_video"></video>
                        <h3 @click="Go_demo">Click to go to METRIX Service</h3>
                    </li>
                </ul>
            </div>
        </div>
        <div class="reflection" ref="reflection">
            <div class="learn">
                <div class="title_area">
                    <h2>What did I learn ?</h2>
                </div>
                <div class="text_area">
                    <ul>
                        <li>
                             <h3>Talk with designer</h3>
                            <p> The component format in Figma files isn't yet fully supported during the import process in the current implementation stage. </p>
                        </li>
                        <li>
                            <h3>Technical plan first</h3>
                            <p>For designers to better understand users' needs in complex task flows, we developed "route map" feature (front-end) that has its visual presentation currently under construction.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="learn">
                <div class="title_area">
                    <h2>Right Next</h2>
                </div>
                <div class="text_area">
                    <ul>
                        <li>
                            <h3>More Figma surport</h3>
                            <p> The component format in Figma files isn't yet fully supported during the import process in the current implementation stage. </p>
                        </li>
                        <li>
                            <h3>Track & show user's footage</h3>
                            <p>For designers to better understand users' needs in complex task flows, we developed "route map" feature (front-end) that has its visual presentation currently under construction.</p>
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
    methods: {
        Go_project(next){
            this.$router.push({path:`/project/${next.order}/${next.name}`})
        },
        Go_demo(){
            window.open('https://www.glaveyen.com/METRIX_demo','_blank')
        }
    },
}
</script>