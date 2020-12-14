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
      <div class="text_area">
        <h3>
          “MUNI is the biggest public transportation in the Bay Area. The MUNI
          Mobile App is the service to offer ticket buying, trip planner, and
          schedule app to help MUNI rider using MUNI, but
          <span
            >the App on App store is 3-star rating and have some
            complaints</span
          >
          on it... ”
        </h3>
        <img :src="Project.images.overview.logo" alt="" />
      </div>
    </div>
    <div class="problem" ref="problem">
      <div class="title_area gapping">
        <h1>Problems in the original App</h1>
      </div>
      <div class="title_area">
        <ul>
          <li>
            <img :src="Project.images.problem.origin_01" alt="" />
          </li>
          <li>
            <div class="test_link"></div>
          </li>
          <li>
            <img :src="Project.images.problem.origin_02" alt="" />
          </li>
        </ul>
        <h3>User Testing & Findings</h3>
      </div>
      <div class="text_area">
        <ul>
          <li><h3>Pro</h3></li>
          <li>
            <h4>User like the cheaper ticket purchasing on the application</h4>
          </li>
        </ul>

        <ul>
          <li>
            <h3>Con</h3>
          </li>
          <li>
            <h4>User got confused or stuck on ticket purchasing flow</h4>
          </li>
          <!-- <li>
                        <h4>User don't know how to <br>use ticket / trip planner / find schedule.</h4>
                    </li> -->
          <li>
            <h4>It takes many unnecessary steps to use/buy tickets</h4>
          </li>
          <li>
            <h4>
              User has to find the route by memorizing and typing both stop &
              route name
            </h4>
          </li>
          <li>
            <h4>
              Jumping out to other apps while the user uses the schedule
              function
            </h4>
          </li>
        </ul>
      </div>
      <div class="title_area">
        <ul class="competitor">
          <li>
            <img :src="Project.images.problem.competitor_01" alt="" />
          </li>
          <li>
            <img :src="Project.images.problem.competitor_02" alt="" />
          </li>
          <li>
            <img :src="Project.images.problem.competitor_03" alt="" />
          </li>
        </ul>
        <h3>What are Competitors Doing?</h3>
      </div>
      <div class="text_area">
        <ul>
          <li><h3>Features</h3></li>
          <li>
            <h4>
              There is the map view in the competitor's service to show the
              route and direction
            </h4>
          </li>
          <li>
            <h4>
              Instead of typing stop or route name, the competitor's service
              uses the search function to help the user
            </h4>
          </li>
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
              <img :src="Project.images.users.icon_age" alt="" />
              <div>
                <h3>Age<br />25-34</h3>
                <p></p>
              </div>
            </li>
            <li>
              <img :src="Project.images.users.icon_commute" alt="" />
              <div>
                <h3>Commuting purpose</h3>
                <p></p>
              </div>
            </li>
            <li>
              <img :src="Project.images.users.icon_switch" alt="" />
              <div>
                <h3>Switch 2-3 times in Journey</h3>
                <p></p>
              </div>
            </li>
            <li>
              <img :src="Project.images.users.icon_journey" alt="" />
              <div>
                <h3>1 person only in Journey</h3>
                <p></p>
              </div>
            </li>
            <li>
              <h2>Uer's pain points</h2>
              <div>
                <h4>The new user has to take long time to learn how to use</h4>
                <h4>Time wasting to find the service in complex navigation</h4>
                <h4>Hard to find the stop/route/time as the user needs it</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="persona">
        <div class="left">
          <img :src="Project.images.users.persona" alt="" />
          <ul>
            <li class="story">
              <p>
                Johnna is a barista working downtown but lives in the suburbs of
                San Francisco. Every morning Johnna has to go to work before 9
                am by MUNI. He uses cheaper tickets on the app, but he often got
                confused with the schedule function and trip planner, he has to
                switch from one app to another. While he first used the app, he
                didn’t even find the ticket to buy
              </p>
            </li>
            <li class="title">
              <h3>Johnna</h3>
              <p>
                “I’d like to know the train information more quickly at the time I need”
              </p>
            </li>
          </ul>
        </div>
        <div class="right">
          <img :src="Project.images.users.persona_info" alt="" />
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
            <img :src="Project.images.ideations.goal_ticket" alt="" />
            <h3>Smarter Ticket Using/Buying</h3>
            <p>
              Making the core function - ticket using smarter and faster is
              important for the user while they meet the rush hour
            </p>
          </li>
          <li>
            <img :src="Project.images.ideations.goal_time" alt="" />
            <h3>
              Optimizing<br />
              Trip Planner & Schedule
            </h3>
            <p>
              Never find the route or stop by name in the user's brain. Doing the
              route/stop searching and check the time at the same time is the
              better idea.
            </p>
          </li>
          <li>
            <img :src="Project.images.ideations.goal_ui" alt="" />
            <h3>Simpler usage/UI in rush hour</h3>
            <p>
              In rush hour, user need clear and simple click-and-use service to
              save their life, not the multiple layers or finding function in
              sidebar
            </p>
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
        <p>
           In the old flow, the user had to take over 10 steps to get the tickets then use them. Now, the user can get the ticket then use it in 6 steps
        </p>
      </div>
      <div class="text_area">
        <img :src="Project.images.optimization.flow_ticket" alt="" />
      </div>
      <div class="title_area">
        <h3>Checking direction & schedule at the <span>same</span> time</h3>
        <p>
          In the past, the user had to switch between trip planner & schedule to get
          what they need, so I combined and connected two task flow into one.
          With the new all in one function, user can save half of their lives and
          avoid repeating operations
        </p>
      </div>
      <div class="text_area">
        <img :src="Project.images.optimization.flow_tt" alt="" />
      </div>
      <div class="title_area">
        <h3><span>More Clear</span> & Affordable Information</h3>
        <p>
          The sidebar design and "text-only" ticket category showing were the
          the reason why the MUNI app was inefficient, so I changed the navigation to
          bottom way, used icon instead to convey information more clear
        </p>
      </div>
      <div class="text_area">
        <img :src="Project.images.optimization.flow_ui" alt="" />
      </div>
      <div class="title_area pop_test">
        <h1>POP Testing & Findings</h1>
      </div>
      <div class="title_area pop_wrapper">
        <ul class="pop_testing">
          <li></li>
          <li>
            <img :src="Project.images.optimization.pop_1" alt="" />
          </li>
          <li class="link"></li>
          <li>
            <img :src="Project.images.optimization.pop_2" alt="" />
          </li>
          <li class="link"></li>
          <li>
            <img :src="Project.images.optimization.pop_3" alt="" />
          </li>
          <li></li>
        </ul>
        <p>
          Without the color and shape interfered, the rough paper
          prototyping help me found the information issues in the early stage
        </p>
      </div>
      <div class="text_area pop_test_content">
        <ul>
          <li>
            <img :src="Project.images.optimization.pop_checkout" alt="" />
            <h3>Put the "checkout" <br />easy to see & click</h3>
          </li>
          <li>
            <img :src="Project.images.optimization.pop_direction" alt="" />
            <h3>
              Spacing the information in <br />
              route information
            </h3>
          </li>
        </ul>
      </div>
    </div>
    <div class="mockup" ref="mockup">
      <div class="title_area ab_test">
        <h1>A/B Testing</h1>
        <h3>Fitting user's request or not?</h3>
        <p>
          Before the project process get into the high-fidelity step, I did the
        </p>
      </div>
      <div class="text_area ab_test">
        <img :src="Project.images.mockup.ab_test" alt="" />
      </div>
      <div class="title_area visual_title">
        <h1>Visual Guide</h1>
      </div>
      <div class="text_area visual">
        <img :src="Project.images.mockup.visual" alt="" />
      </div>
      <div class="title_area iteration">
        <h1>Iterations & Mockup</h1>
      </div>
      <div class="text_area"></div>

      <div class="title_area">
        <h3>Ticket Usage</h3>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img :src="Project.images.mockup.iterations.L1" alt="" />
            <h4>Draft 01</h4>
          </li>
          <li class="link">
            <div></div>
          </li>
          <li>
            <img :src="Project.images.mockup.iterations.M1" alt="" />
            <h4>Draft 02</h4>
          </li>
          <li class="link">
            <div></div>
          </li>
          <li>
            <img :src="Project.images.mockup.iterations.H1" alt="" />
            <h4>Final</h4>
          </li>
        </ul>
      </div>
      <div class="title_area">
        <h3>Ticket Purchasement</h3>
        <p>
          Based on the user testing, I changed the way to show the different
          categories of tickets and the position of checkout
        </p>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img :src="Project.images.mockup.iterations.L2" alt="" />
            <h4>Draft 01</h4>
          </li>
          <li class="link">
            <div></div>
          </li>
          <li>
            <img :src="Project.images.mockup.iterations.M2" alt="" />
            <h4>Draft 02</h4>
          </li>
          <li class="link">
            <div></div>
          </li>
          <li>
            <img :src="Project.images.mockup.iterations.H2" alt="" />
            <h4>Final</h4>
          </li>
        </ul>
      </div>
      <div class="title_area">
        <h3>Trip Planner</h3>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img :src="Project.images.mockup.iterations.L3" alt="" />
            <h4>Draft 01</h4>
          </li>
          <li class="link">
            <div></div>
          </li>
          <li>
            <img :src="Project.images.mockup.iterations.M3" alt="" />
            <h4>Draft 02</h4>
          </li>
          <li class="link">
            <div></div>
          </li>
          <li>
            <img :src="Project.images.mockup.iterations.H3" alt="" />
            <h4>Final</h4>
          </li>
        </ul>
      </div>
      <div class="title_area">
        <h3>Schedule</h3>
      </div>
      <div class="text_area">
        <ul>
          <li>
            <img :src="Project.images.mockup.iterations.L4" alt="" />
            <h4>Draft 01</h4>
          </li>
          <li class="link">
            <div></div>
          </li>
          <li>
            <img :src="Project.images.mockup.iterations.M4" alt="" />
            <h4>Draft 02</h4>
          </li>
          <li class="link">
            <div></div>
          </li>

          <li>
            <img :src="Project.images.mockup.iterations.H4" alt="" />
            <h4>Final</h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="prototyping" ref="prototyping">
      <div class="title_area">
        <h1>HTML/CSS/JS Prototyping</h1>
      </div>
      <div class="text_area"></div>
      <div class="title_area">
        <h3>Real transition & effect</h3>
        <p>
          Comparing with normal prototyping made by software, coding prototyping
          can do the real transition, get more closer to real production
        </p>
      </div>
      <div class="text_area code_prototype">
        <img :src="Project.images.prototyping.code_transition" alt="" />
        <div>
          <div></div>
        </div>
        <img :src="Project.images.prototyping.transition_gif" alt="" />
      </div>
      <div class="title_area">
        <h3>Real operation & interaction on page</h3>
        <p>
          Coding prototyping can make the complex work come true, like click to
          add the number of the ticket in the panel
        </p>
      </div>
      <div class="text_area code_prototype">
        <img :src="Project.images.prototyping.code_data" alt="" />
        <div>
          <div></div>
        </div>
        <img :src="Project.images.prototyping.operation_gif" alt="" />
      </div>
      <div class="title_area gapping final_prototype">
        <h1>Final Prototyping Demo</h1>
      </div>
      <div class="text_area"></div>
      <div class="title_area">
        <h3>Trip Usage - <br />Trip Purchasement</h3>
      </div>
      <div class="text_area final_demo">
        <img :src="Project.images.prototyping.final_01" alt="" />
      </div>
      <div class="title_area">
        <h3>Trip Purchasement</h3>
      </div>
      <div class="text_area final_demo">
        <img :src="Project.images.prototyping.final_02" alt="" />
      </div>
    </div>
    <div class="reflection" ref="reflection">
      <div class="learn">
        <div class="text_area">
          <div>
            <h2>What did I learn ?</h2>
            <ul>
              <li>
                <h3>Listening user's voice</h3>
                <p>
                  After the user interview and testing, I found that even the
                  tiny stuff, we supposed to ask the user for fitting their mind and
                  request
                </p>
              </li>
              <li>
                <h3>Whole design flow challenge</h3>
                <p>
                  This is the project I ran through the full UX flow firstly, I
                  felt excited that some skills I learned like flow-renew &
                  interviewing, and it could make a better future for user
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="next"
        :style="{ backgroundImage: 'url(' + Project.images.end.future + ')' }"
      >
        <div class="text_area">
          <h2>Where can be better?</h2>
          <ul>
            <li>
              <h3>More transportation info</h3>
              <p>
              If it has a longer time of
                the project, I’d add the more transitway to help MUNI App user to
                use different tools like other transportation or bike to do the
                transit
              </p>
            </li>
            <li>
              <h3>Not only MUNI,<br />the guider in Bay Area</h3>
              <p>
                By the interviewing, users  want to know more about the
                transportation and the details of the city, the more time means I
                can make the MUNI become a guider, guide user play and go in the Bay Area
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
export default {
  name: "muni",
  props: {
    Structure: Array,
    Next: Object,
    Project: Object,
  },
  components: {
    icon_arrow_down,
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
  },
  beforeDestroy() {
    this.$emit("reload", "");
  },
};
</script>