<template>
  <section class="project_detail" :class="Project.content">
    <div
      class="banner"
      :style="{
        background:
          'url(' +
          Project.banner +
          '),linear-gradient(180deg,rgba(230,1,162,0) 30%,rgba(230,1,162,0.6) 60%,#5400d5)',
      }"
      ref="project info"
    >
      <div class="show_case"></div>
      <div class="wrapper-title">
        <h1>{{ Project.name }}</h1>
        <ul>
          <li v-for="tag in Project.tags">
            <h4>{{ tag }}</h4>
          </li>
        </ul>
      </div>
      <div class="slide_case" v-if="isMounted">
        <img :src="Project.images.info.info_case" alt="" />
      </div>
    </div>
    <div class="info">
      <ul>
        <li>
          <h3>Roles</h3>
          <div>
            <p v-for="text in Project.info.role">{{ text }}</p>
          </div>
        </li>
        <li>
          <h3>Time & Duration</h3>
          <div>
            <p v-for="text in Project.info.time">{{ text }}</p>
          </div>
        </li>
        <li>
          <h3>Skills</h3>
          <div>
            <p v-for="text in Project.info.skills">{{ text }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="overview" ref="overview">
      <div class="text_area">
        <h2>About Project Background</h2>
        <p>
          SOONPORT is a big screw, nail, steel wires producer & provider exports
          productions to EU or US. In 2019, they decided to
          <strong>re-new the old website</strong>, for manage content by
          themselves and get some other way to touch customer and show products
        </p>
        <img :src="Project.images.overview.logo" alt="" />
      </div>
      <div class="text_area">
        <h2>User's Problems...</h2>
        <p>
          “Clients said that they
          <strong>find the specific product hardly on official</strong>, and
          they’d like to know the content about
          <strong>manufacturing more</strong>.” <br /><br />—By Client’s Opinion
          & SOONPORT
        </p>
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
              <div v-for="rec in Problem_time_waste">{{ rec }}</div>
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
                <h4>Need More<br />Manufacturing</h4>
              </div>
            </div>
            <h3>Need more manufacturing content</h3>
            <p>
              Not just product, the user like to know more about manufacturing
            </p>
          </li>
        </ul>
      </div>
      <div class="title_area">
        <h1>Business requests</h1>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img
              :src="Project.images.problems.logo"
              alt=""
              class="problems_logo"
            />
            <h3>Update content by SOONPORT-STAFFS-SELF</h3>
            <p>
              SOONPORT Staffs'd like to update content on the website without
              development support.
            </p>
          </li>

          <li>
            <div class="touching">
              <div class="left"></div>
              <div class="center"></div>
              <div class="right"></div>
            </div>
            <h3>More paths to touch clients</h3>
            <p>
              SOONPORT want other ways to get client's opinion, not only the phone
              call or email traditionally
            </p>
          </li>
          <li>
            <h3>Show more products to clients</h3>
            <p>
              Not just the new or seasonal products, SOONPORT will show more
              products including old serials or other products on the website
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
            <img
              :src="Project.images.problems.competitor"
              alt=""
              class="competitor_search"
            />
            <h3>Searching product</h3>
            <p>
              On the competitor's website, if there are too many products to show,
              it will offer the search function
            </p>
          </li>
          <li>
            <div class="competitor_content">
              <h1>90%<span> of Product</span></h1>
            </div>
            <h3>Show more products and less other content</h3>
            <p>
              On the competitors' website, over 90% of the content is products or
              products concerning
            </p>
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
              <img :src="Project.images.users.icon_age" alt="" />
              <h2>42-46</h2>
              <h2>Years</h2>
            </div>
            <div>
              <p>
                Users belong to Gen.X, working in the traditional way like Email
                & phone call contact
              </p>
            </div>
          </li>
          <li>
            <div>
              <img :src="Project.images.users.icon_job" alt="" />
              <h2>Purchasing</h2>
              <h2>Agents</h2>
            </div>
            <div>
              <p>
                Users are professional purchasing agents in construction &
                fasteners field
              </p>
            </div>
          </li>
          <li>
            <div>
              <img :src="Project.images.users.icon_desktop" alt="" />
              <h2>On Desktop</h2>
              <h2>Viewport</h2>
            </div>
            <div>
              <p>The user uses the desktop view in their working time mostly</p>
            </div>
          </li>
          <li>
            <div>
              <img :src="Project.images.users.icon_time" alt="" />
              <h2>5 sec - 3 mins</h2>
            </div>
            <div>
              <p>
                The user has a very short time to check the content on the website to
                find what they want
              </p>
            </div>
          </li>
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
            <li
              v-for="(thumb, key) in Slider.content"
              :key="key"
              :style="{ left: key * 100 - Slider.control * 100 + '%' }"
            >
              <div class="left">
                <img :src="thumb.persona" alt="" />
                <div class="text2">
                  <p>{{ thumb.story }}</p>
                </div>
                <div class="text">
                  <h2>{{ thumb.name }}</h2>
                  <h5>"{{ thumb.title }}"</h5>
                </div>
              </div>
              <div class="right">
                <img :src="thumb.persona_content" alt="" />
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
              <search_bar :Icon="Project.images.ideation.search_icon" />
            </div>
            <h3>Search, Not Find - Real Time Searching</h3>
            <p>
              Searching the specific product by real-time multiple keywords
              comparing and categories switch can save user's time and life
            </p>
          </li>
          <li>
            <div class="ideation_CMS">
              <img :src="Project.images.ideation.cms" alt="" />
            </div>
            <h3>
              Self-Maintainess - <br />
              Authority Management & CMS System
            </h3>
            <p>
              With authority management & CMS system, SOONPORT staffs can
              maintain the content on the website anytime without the
              developer's help
            </p>
          </li>
          <li>
            <div class="ideation_PDF">
              <img :src="Project.images.ideation.pdf" alt="" />
            </div>
            <h3>Show more - PDF Reader</h3>
            <p>
              Not just PDF download, clients can see many old products and more
              information on DM by the online PDF reader
            </p>
          </li>
          <li>
            <div class="ideation_contact">
              <img :src="Project.images.ideation.contact" alt="" />
            </div>
            <h3>Contact Directly - Conctact board</h3>
            <p>
              Clients can get contact with SOONPORT by contact board, and
              SOONPORT can get the feedback or request then process it
            </p>
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
        <p>
          In the old flow, the user has to take up to 15 mins to find what they want.
          Now, with a real-time searching function, the user can save up to 13 mins to
          get what they want
        </p>
      </div>
      <div class="text_area searching">
        <img :src="Project.images.optimization.search" alt="" />
      </div>
      <div class="title_area">
        <h3>CMS System based on authority management</h3>
      </div>
      <div class="text_area cms">
        <img :src="Project.images.optimization.cms" alt="" />
      </div>
    </div>

    <div class="prototyping" ref="prototyping">
      <div class="title_area">
        <h1>MVP Prototype<br />Testing</h1>
      </div>
      <div class="text_area">
        <ul>
          <li class="mvp">
            <img :src="Project.images.prototyping.mvp_chart" alt="" />
            <img :src="Project.images.prototyping.mvp_chart2" alt="" />
            <div class="slide_box">
              <ul>
                <li><h5>http://www.soonport.com</h5></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div
                :style="{
                  backgroundImage:
                    'url(' + Project.images.prototyping.mvp_photo + ')',
                }"
              ></div>
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
              <img :src="Project.images.prototyping.arrow" alt="" />
              <div class="merge">
                <div></div>
              </div>
            </div>
          </li>
          <li>
            <h3>Change the user <br />non-interested content</h3>
            <p>
              User didn't get interested in the content "about", they care more
              on product and manufacturing page, so we decided to change the
              about from page to a section of the home
            </p>
          </li>
          <li>
            <h3>Change the Product Filter functions</h3>
            <p>
 User got confused while they switched the repeated categories,
              they preferred to use it with the searching function

            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="mockup" ref="mockup">
      <div class="title_area" v-if="Showcase">
        <h2>Website Mockup - {{ Showcase.page }}</h2>
        <p>{{ Showcase.content }}</p>
      </div>
      <show_case
        :Image_list="Project.images.mockup"
        @Switch="Show_case_switch"
      />
      <div class="final">
        <h2>Final Design</h2>
        <div class="show_case">
          <video
            :src="Project.images.prototyping.final_video"
            autoplay
            loop
            playsinline
          ></video>
        </div>
      </div>
    </div>
    <div class="development" ref="development">
      <div class="text_area">
        <div class="text">
          <h2>Start Developing Website</h2>
          <p>
            During the design process, we started the development preparation
            already to avoid some conflicts between design & development. We
            discussed with SOONPORT Staffs about technical limitation and
            the possible solution, to fit their requests and make the project go
            through smoothly
          </p>
        </div>
        <img :src="Project.images.development.graphic" alt="" />
      </div>
    </div>
    <div class="planning" ref="techniques">
      <div class="title_area gapping">
        <h1>Planning Before Production</h1>
      </div>
      <div class="text_area"></div>
      <div class="title_area">
        <h3>Techniques</h3>
        <p>
          We choose Vue.js as our main developing system and use Firebase & PHP
          to manage our data and images
        </p>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img
              :src="Project.images.development.technique"
              alt=""
              class="techniques"
            />
          </li>
        </ul>
      </div>
      <div class="title_area gapping">
        <h3>
          Limitation of <br />
          images CRUD
        </h3>
        <p>
          SOONPORT requests that some sensitive images have to save in the local server, so we made the easy API with PHP to get and upload this content. The general images save and manage in the Firestorage
        </p>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img
              :src="Project.images.development.image_manage"
              alt=""
              class="image_manage"
            />
          </li>
        </ul>
      </div>
      <div class="title_area debounce gapping">
        <h3>Debouncing & UX</h3>
        <p>
           We made the debounce in the search function to lower the frequency of the request to the server. Also, we use the average delay time of human's
          typing to make the demonstration of result naturally
        </p>
        <img
          :src="Project.images.development.debounce"
          alt=""
          class="debounce_img"
        />
      </div>
      <div class="text_area">
        <ul>
          <li>
            <search_bar :Icon="Project.images.ideation.search_icon" />
          </li>
        </ul>
      </div>
    </div>
    <div class="reflection" ref="reflection">
      <!-- <div class="link">
        <ul>
          <li>
            <h4>Go to Research Google Slide</h4>
          </li>
          <li>
            <h4>Download Research PDF</h4>
          </li>
        </ul>
      </div> -->
      <GoLink
        :google="'https://docs.google.com/presentation/d/1Hc2iLQYH83LOC1xlE5QbPduLCmF3Y_wGRnp0mQi2ONs/edit#slide=id.g9c46ae414e_0_199'"
        :PDF="'https://www.glaveyen.com/portfolio_pdf/Chin%20Hsien%20Yen%20Portfolio%20Book_%2004799684_WNM_1_soonport.pdf'"
      />
      <div class="learn">
        <div class="title_area"><h2>What did I learn ?</h2></div>
        <div class="text_area">
          <h3>Difference between B2B & B2C</h3>
          <p>
            Users are different between B2B & B2C business. In SOONPORT case,
            users are professional mostly, they can even know more than us, so
            we have to show the content smartly and the most efficiently
          </p>
          <h3>Development in real world</h3>
          <p>Developing production</p>
        </div>
      </div>
      <div class="next">
        <div class="title_area">
          <h2>Keep optimizing</h2>
          <p>
            The project will keep going in the future, base on the tracking of
            Google Analytics, feedback from clients, we will keep modifying the
            website and making it better and better
          </p>
        </div>
        <div class="text_area">
          <img :src="Project.images.end.future" alt="" />
        </div>
      </div>
      
    </div>
    <div class="end">
      <div class="go-to" @click="Go_project({ ...Next })">
        <h4>Go to next project</h4>
        <icon_arrow_down />
      </div>
      <div class="go-to-project">
        <h4>{{ Next.name }}</h4>
      </div>
    </div>
  </section>
</template>
<script>
import icon_arrow_down from "../icons/icon_arrow_down";
import show_case from "../projects/soonport_showcase";
import slider from "../projects/slider";
import search_bar from "../universal/searching_anim";
import GoLink from "./gopresentation"
export default {
  name: "soonport",
  props: {
    Structure: Array,
    Next: Object,
    Project: Object,
  },
  components: {
    GoLink,
    icon_arrow_down,
    show_case,
    slider,
    search_bar,
  },
  data() {
    return {
      Showcase: null,
      isMounted: false,
      Slider: {
        control: 0,
        content: [
          {
            name: "Steven",
            title: "I'd find the product I need ASAP.",
            persona: this.Project.images.users.persona_1,
            persona_content: this.Project.images.users.persona_content_2,
            story:
              "Steven is a senior purchasing agent iof the fastners warehouse industry.Every day he has to take hours and hours to visit many potential vendor’s site to find the one or two product fit the company’s request, then contacting the vendor with call and mail, or waiting for call and mail.",
          },
        ],
      },
    };
  },
  computed: {
    Problem_time_waste() {
      const newArr = new Array(100);
      return newArr;
    },
  },
  mounted() {
    this.isMounted = true;
    const ref_arr = this.Structure.map((item) => {
      return {
        name: item,
        height: this.$refs[item].offsetTop,
      };
    });
    this.$emit("ref_list", ref_arr);
  },
  methods: {
    Show_case_switch(e) {
      this.Showcase = e;
    },
    Slider_control(e) {
      this.Slider.control += e;
    },
    Go_project(next) {
      this.$router.push({ path: `/project/${next.order}/${next.name}` });
    },
  },
  beforeDestroy() {
    this.isMounted = false;
  },
};
</script>