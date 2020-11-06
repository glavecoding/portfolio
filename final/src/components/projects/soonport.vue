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
                <div class="slide_case" v-if="isMounted">
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
                <h2>About Project Background</h2>
                <p>SOONPORT is a big screw, nail, steel wires producer & provider exports productions to EU or US. In 2019, they decided to <strong>re-new the old website</strong>, for manage content by themselves and get some other way to touch customer and show products.</p>
                <img :src="Project.images.overview.logo" alt="">
            </div>
            <div class="text_area">
                <h2>User's Problems...</h2>
                <p>“Clients said that they <strong>find the specific product hardly on official</strong>, and they’d like to know the content about <strong>manufacturing more</strong>.”
                    <br><br>—By Client’s Opinion & SOONPORT</p>
            </div>
        </div>
        <div class="problem" ref="problem">
            <div class="title_area">
                <h1>User's frustrations</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <div class="time_waste">
                            <div v-for="rec in Problem_time_waste">{{rec}}</div>
                        </div>
                        <h3>Finding the product in 100+ products hardly</h3>
                        <p>It's HARD to find special one from 100+ products sea</p>
                    </li>
                    <li>
                        <div class="manufacturing">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div>
                                <h4>Need More<br>Manufacturing</h4>
                            </div>
                        </div>
                        <h3>Need more manufacturing content</h3>
                        <p>Not just product, user'd like to know more about manufacturing</p>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h1>Business requests</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                       <img :src="Project.images.problems.logo" alt="" class="problems_logo">
                        <h3>
                            Update content by SOONPORT-SELF
                        </h3>
                        <p>
                            SOONPORT Staffs'd like to update content on website without development support.
                        </p>
                    </li>
                    
                    <li>
                        <div class="touching">
                            <div class="left"></div>
                            <div class="center"></div>
                            <div class="right"></div>
                        </div>
                        <h3>
                            More paths to touch clients
                        </h3>
                        <p>
                            SOONPORT want other ways to get client's opinion, not only phone call or email traditionally.
                        </p>
                    </li>
                    <li>
                        <h3>
                            Show more products to clients
                        </h3>
                        <p>
                            Not just the new or seasonal products, SOONPORT will show more products including old serials or other products on website.
                        </p>
                    </li>
                </ul>
            </div>
            <div class="title_area">
                <h1>What are competitors doing ?</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <img :src="Project.images.problems.competitor" alt="" class="competitor_search">
                        <h3>Searching product</h3>
                        <p>On competitor's website, if there are too many products to show, it will offer the search function.</p>
                    </li>
                    <li>
                        <div class="competitor_content">
                            <h1>90%<span> of Product</span></h1>
                        </div>
                        <h3>Show more products and less other content</h3>
                        <p>On competitors website, over 90% of content is products or products concerning, </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="users" ref="users">
            <div class="user_info">
                   <h2>Target Audience Information</h2>
                   <ul>
                       <li>
                            <div>
                                <h2>42-46</h2>
                                <h2>Years</h2>
                            </div>
                            <div>
                                <p>Users are belong to Gen.X, working in traditional way like Email & phone call contact.</p>
                            </div>
                        </li>
                       <li>
                       <div>
                                <h2>Purchasing</h2>
                                <h2> Agents</h2>
                            </div>
                            <div>
                                <p>Users are professional purchasing agents in construction & fasteners field.</p>
                            </div></li>
                       <li>
                            <div>
                                <h2>On Desktop</h2>
                                <h2>Viewport</h2>
                            </div>
                            <div>
                                <p>User uses the desktop view in their working time mostly.</p>
                            </div>
                        </li>
                        <li>
                        <div>
                                <h2>5 sec - 3 mins</h2>
                            
                            </div>
                            <div>
                                <p>User has really short time to check the content on website to find what they want.</p>
                            </div></li>
                   </ul>
                <h2 class="persona_title">Persona - Steven & Sarah</h2>
            </div>
            <slider
            :Control="Slider.control"
            :Thumbs_num="Slider.content.length"
            @Control_number="Slider_control"
            >
                <template v-slot:thumbnails>
                    <ul>
                        <li v-for="(thumb,key) in Slider.content" :key="key" :style="{'left':(key*100 - Slider.control*(100)) + '%'}">
                            <div class="left">

                                <img :src="thumb.persona" alt="">
                                <div class="text2">
                                    <p>{{thumb.story}}</p>
                                </div>
                                <div class="text">
                                    <h2>{{thumb.name}}</h2>
                                    <h5>"{{thumb.title}}"</h5>
                                </div>
                            </div>
                            <div class="right">
                                <img :src="thumb.persona_content" alt="">
                            </div>
                            
                        </li>
                    </ul>
                </template>
            </slider>
        </div>
        <div class="ideation" ref="ideation">
            <div class="title_area">
                <h1>Features to fit user's need</h1>
                <p></p>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <div class="ideation_search">
                            <search_bar
                                :Icon="Project.images.ideation.search_icon"
                            />
                        </div>
                        <h3>Search, Not Find - Real Time Searching</h3>
                        <p>Searching the specific product by real-time multiple keywords comparing and chategories switch can save user's time and life.</p>
                        
                    </li>
                    <li>
                        <div class="ideation_CMS">
                            <img :src="Project.images.ideation.cms" alt="">
                        </div>
                        <h3>Self-Maintainess - <br> Authority Management & CMS System</h3>
                        <p>With authority management & CMS system, SOONPORT staffs can maintain the content on the website anytime without the developer's help.</p>
                    </li>
                    <li>
                        <h3>Show more - PDF Reader</h3>
                        <p>Not just PDF download, clients can see many old products and more information on DM by the online PDF reader.</p>
                    </li>
                    <li>
                        <h3>Contact Directly - Conctact board</h3>
                        <p>Contact function</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="optimization" ref="optimization">
            <div class="title_area gapping">
                <h1>Optimizations in Website</h1>
            </div>
            <div class="text_area"></div>
            <div class="title_area">
                <h3>Save <span>86.6%</span> of time to find user want</h3>
                <p>In old flow, user has to take up to 15 mins to find what they want. Now, with real-time searching funciton, user can save up to 13 mins to get what they want.</p>
            </div>
            <div class="text_area searching">
                <img :src="Project.images.optimization.search" alt="">
            </div>
            <div class="title_area"><h3>CMS System based on authority management</h3></div>
            <div class="text_area cms">
                <img :src="Project.images.optimization.cms" alt="">
            </div>
        </div>
       
        <div class="prototyping" ref="prototyping">
           <div class="title_area">
               <h1>MVP Prototype<br>Testing </h1>
           </div>
           <div class="text_area">
                <ul>
                    <li class="mvp">
                        <img :src="Project.images.prototyping.mvp_chart" alt="">
                        <img :src="Project.images.prototyping.mvp_chart2" alt="">
                        <div class="slide_box">
                            <ul>
                                <li><h5>http://www.soonport.com</h5></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div :style="{'backgroundImage':'url('+Project.images.prototyping.mvp_photo+')'}">

                            </div>
                        </div>
                        <div class="instruction">
                            <h4>Minimum Production Site-Map</h4>
                            <h4>MVP Test Prototype</h4>
                        </div>
                    </li>
                </ul>
           </div>
           <div class="title_area">
               <h1>Findings & Changes</h1>
           </div>
           <div class="text_area">
               <ul>
                   <li>
                       <div class="page_to_sec">
                           <div class="anim">
                               <div></div>
                               <div></div>
                           </div>
                           <img :src="Project.images.prototyping.arrow" alt="">
                           <div class="merge">
                               <div></div>
                           </div>
                       </div>
                   </li>
                    <li>
                         <h3>Change the user <br>non-interested content</h3>
                        <p>User didn't get interested in the content "about", they care more on product and manufacturing page, so we decided to change the about from page to a section of home</p>
                    </li>
                    <li>
                        <h3>Change the Product Filter functions</h3>
                        <p>User got confused while they switched the repeated categories, they preferred use it with searching function.</p>
                    </li>
                </ul>
           </div>
        </div>
         <div class="mockup" ref="mockup">
            <div class="title_area" v-if="Showcase">
                <h2>Website Mockup - {{Showcase.page}}</h2>
                <p>{{Showcase.content}}</p>
            </div>
            <show_case
                :Image_list="Project.images.mockup"
                @Switch="Show_case_switch"
            />
            <div class="final">
                <h2>Final Design</h2>
                <div class="show_case">
                    <video :src="Project.images.prototyping.final_video" autoplay loop playsinline></video>
                </div>
            </div>
        </div>
        <div class="development" ref="development">
            <div class="text_area">
                <div class="text">
                    <h2>Start Developing Website</h2>
                    <p>During the design process, we started the development preparation already. Before</p>
                </div>
                <img :src="Project.images.development.graphic" alt="">
            </div>
        </div>
        <div class="planning" ref="planning">
            <div class="title_area gapping">
                <h1>Planning Before Production</h1>
            </div>
            <div class="text_area"></div>
            <div class="title_area">
                <h3>Techniques</h3>
                <p></p>
            </div>
            <div class="text_area">
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="title_area">
                <h3>Debouncing & UX</h3>
                <p></p>
            </div>
            <div class="text_area">
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="title_area">
                <h3>Management</h3>
                <p></p>
            </div>
            <div class="text_area">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="issue" ref="issue">
            <div class="title_area">
                <h1>Issue We Met</h1>
            </div>
            <div class="text_area">
                <ul>
                    <li>
                        <h3>User vs Business</h3>
                        <p></p>
                    </li>
                    <li>
                        <h3>Design & Development</h3>
                        <p></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="reflection" ref="reflection">
            <div class="learn">
                <div class="title_area"><h2>What did I learn ?</h2></div>
                <div class="text_area">

                </div>
            </div>
            <div class="next">
                <div class="title_area"><h2>Keep optimizing</h2></div>
                <div class="text_area">

                </div>
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
import show_case from '../projects/soonport_showcase'
import slider from '../projects/slider'
import search_bar from '../universal/searching_anim'
export default {
    name:'soonport',
    props:{
        Structure:Array,
        Next:Object,
        Project:Object
    },
    components:{
        icon_arrow_down,
        show_case,
        slider,
        search_bar
    },
    data() {
        return {
            Showcase:null,
            isMounted:false,
            Slider:{
                control:0,
                content:[
                    {
                    name:'Steven',
                    title:"I'd find the product I need ASAP.",
                    persona:this.Project.images.users.persona_1,
                    persona_content:this.Project.images.users.persona_content_2,
                    story:"Steven is a senior purchasing agent iof the fastners warehouse industry.Every day he has to take hours and hours to visit many potential vendor’s site to find the one or two product fit the company’s request, then contacting the vendor with call and mail, or waiting for call and mail."
                    },
                    // {
                    //     name:'Sarah',
                    //     title:'SOONPORT Manager',
                    //     persona:this.Project.images.users.persona_2,
                    //     persona_content:this.Project.images.users.persona_content_2
                    // }
                ]
            }
        }
    },
    computed:{
        Problem_time_waste(){
            const newArr = new Array(100)
            return newArr
        },
    },
    mounted() {
        this.isMounted = true
        const ref_arr = this.Structure.map(item=>{
            return {
                name:item,
                height:this.$refs[item].offsetTop
            }
        })
        this.$emit('ref_list',ref_arr)
    },
    methods: {
        Show_case_switch(e){
            this.Showcase = e
        },
        Slider_control(e){
            this.Slider.control += e
        }
    },
    beforeDestroy(){
        this.isMounted = false
    }
}
</script>