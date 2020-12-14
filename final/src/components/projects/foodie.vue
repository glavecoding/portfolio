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
      <div class="slide_case">
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
      <div class="iframe_box">
        <div class="phone_case">
          <iframe
            src="https://glaveyen.com/foodie"
            frameborder="0"
            width="375"
            height="670"
          ></iframe>
        </div>
        <img :src="Project.images.overview.frame" alt="" />
        <h4 @click="open_foodie">Try above or click to go to service</h4>
      </div>
      <div class="text_area">
        <p>
          Yelp is a good service to find good restaurants while we have no idea what to eat, but does it have a way to filter the good restaurants which are closer to the user in a sec? Let's find the way to go in 3 days challenge,
          to make the "FOODIE"!
        </p>
      </div>
      <div class="img_area">
        <img :src="Project.images.overview.logo" alt="" />
        <h1>x</h1>
        <img :src="Project.images.overview.yelp" alt="" />
      </div>
    </div>

    <div class="ideations" ref="ideations">
      <div class="title_area gapping">
        <h1>Ideations & Problems</h1>
      </div>
      <div class="text_area"></div>
      <div class="title_area">
        <h3>Problems of Yelp</h3>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img class="yelp_logo" :src="Project.images.overview.yelp" alt="" />
            <p>
              Yelp is a good service to find the good restaurants, it's full
              functional and it has many other contents on the service, but for
              a big foodie, I only want a good restaurant right now...
            </p>
            <h4 class="yelp_issue">
              1. Too many other informations for a foodie
            </h4>
            <h4 class="yelp_issue">
              2. Need the restaurant suggestions near lazy user
            </h4>
          </li>
        </ul>
      </div>
      <div class="title_area">
        <h3>Ieations of service</h3>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <div class="ideation_sfs_img">
              <img :src="Project.images.ideations.icon_search" alt="" />
              <img :src="Project.images.ideations.icon_filter" alt="" />
              <img :src="Project.images.ideations.icon_sort" alt="" />
            </div>
            <h3>Quick search, filter, and sorting</h3>
            <p>
               To satisfy my request, I only left search, filter, and sort functions to
              rise the efficiency of finding restaurants
            </p>
          </li>
          <li>
            <div class="ideation_sfs_img">
              <img :src="Project.images.ideations.icon_walk" alt="" />
              <img :src="Project.images.ideations.icon_drive" alt="" />
            </div>
            <h3>How to go to restaurant</h3>
            <p>
              I'm lazy, so I need not only position of me and restaurant, to
              show the route for worker or driving car is essential
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="design" ref="design">
      <div class="title_area gapping">
        <h1>Design Assets</h1>
      </div>
      <div class="text_area"></div>
      <div class="title_area">
        <h3>Graphic Assets</h3>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img :src="Project.images.design.logo" alt="" />
            <h4>Foodie Logo</h4>
          </li>
          <li>
            <img :src="Project.images.design.empty" alt="" />
            <h4>Empty Status Graphic</h4>
          </li>
          <li>
            <Loading :image_link="Project.images.design.loading" />
            <h4>Loading Animation</h4>
          </li>
          <li>
            <h4>Button & Icon</h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="development" ref="development">
      <div class="text_area">
        <div class="text">
          <h2>Service Development</h2>
          <p>
            
          </p>
        </div>
        <div class="img_area">
          <img :src="Project.images.overview.logo" alt="" />
          <h1>x</h1>
          <img :src="Project.images.overview.yelp" alt="" />
          <h1>x</h1>
        </div>
      </div>
    </div>
    <div class="techniques" ref="techniques">
      <div class="title_area gapping">
        <h1>Techniques</h1>
      </div>
      <div class="text_area"></div>
      <div class="title_area">
        <h3>Search Setting</h3>
        <p>
          User can adjust the search range and amount of result to update the
          search result anytime to get the latest result
        </p>
      </div>
      <div class="text_area">
        <div class="demo_box">
          <img :src="Project.images.techniques.tech_setting" alt="" />
        </div>
      </div>
      <div class="title_area">
        <h3>JS Animation</h3>
        <p>
          For optimizing the performance, I used javascript with CSS to make the
          loading animation
        </p>
      </div>
      <div class="text_area">
        <div class="demo_box">
          <img :src="Project.images.techniques.tech_loading" alt="" />
        </div>
      </div>
      <div class="title_area">
        <h3>Sort & Debounce</h3>
        <p>
          Via the help from BootStrap - Vue, I can do the quick sorting the
          result by price, rate, and distance
        </p>
      </div>
      <div class="text_area">
        <div class="demo_box">
          <img :src="Project.images.techniques.tech_sort" alt="" />
        </div>
      </div>
    </div>

    <div class="reflection" ref="reflection">
       <GoLink
        :google="'https://docs.google.com/presentation/d/1Hc2iLQYH83LOC1xlE5QbPduLCmF3Y_wGRnp0mQi2ONs/edit#slide=id.gaf0084b23e_0_0'"
        :PDF="'https://www.glaveyen.com/portfolio_pdf/Chin%20Hsien%20Yen%20Portfolio%20Book_%2004799684_WNM_5_foodie.pdf'"
      />
      <div class="learn">
        <div class="title_area">
          <h2>What did I learn ?</h2>
        </div>
        <div class="text_area">
          <ul>
            <li>
              <h3>Compromise</h3>
              <p>
                 In a quick coding challenge, I learned how to leave some idea
                behind the back because of the limited time, and I tried to
                arrange the priority of the work to make the development go
                smoothly
              </p>
            </li>
            <li>
              <h3>Less is more</h3>
              <p>
                In the small service, doing less is more important than do more,
                the little and shining dagger can be and faster and better
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="learn">
        <div class="title_area">
          <h2>Where can be better?</h2>
        </div>
        <div class="text_area">
          <ul>
            <li>
              <h3>Pair with other service</h3>
              <p>
                If there's more time to go, I'd like to link the service to
                other delivery services, so the user can do the next step after found
                the restaurant but could not go
              </p>
            </li>
            <li>
              <h3>To be a real product</h3>
              <p>
                I want to pack & convert the HTML5 into the real app in the
                future, the "Foodie" is a good start to go
              </p>
            </li>
          </ul>
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
import Loading from "../projects/foodie_loading";
import GoLink from "./gopresentation"
export default {
  name: "foodie",
  props: {
    Structure: Array,
    Next: Object,
    Project: Object,
  },
  components: {
    icon_arrow_down,
    Loading,
    GoLink
  },
  data() {
    return {};
  },
  mounted() {
    const ref_arr = this.Structure.map((item) => {
      return {
        name: item,
        height: this.$refs[item].offsetTop,
      };
    });
    this.$emit("ref_list", ref_arr);
  },
  methods: {
    Go_project(next) {
      this.$router.push({ path: `/project/${next.order}/${next.name}` });
    },
    open_foodie() {
      window.open("https://www.glaveyen.com/foodie", "_blank");
    },
  },
};
</script>