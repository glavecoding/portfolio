<template>
    <div class="show_case">
        <ul>
            <li 
            v-for="page in Pages" 
            :class="page.page==Show.page?'actived':''"
            @click="Switch(page)"
            >
                <h4>{{page.page}}</h4>
            </li>
            <li class="last_dot">
                <div></div>
                <div></div>
                <div></div>
            </li>
        </ul>
        <div class="scroll_box">
            <icon_arrow_up/>
            <h5>Scroll Down & Up</h5>
            <icon_arrow_down/>
        </div>
        <div class="monitor" v-scrolling="Handle_scroll">
            <div class="monitor_content">
                <img :src="Image_list[Show.page]" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import icon_arrow_up from '../icons/icon_arrow_up'
import icon_arrow_down from '../icons/icon_arrow_down'
export default {
    name:'Show_case',
    components:{
        icon_arrow_down,
        icon_arrow_up
    },
    props:{
        Image_list:Object
    },
    data() {
        return {
            Show:{page:'Home',content:'Home page contains real-time search function, exhibition news and history of SOONPORT. As the landing page, history section can navigate user to manufacturing page, the searching function will navigate to product page and show the detail of product.'},
            Pages:[
                {page:'Home',content:'Home page contains real-time search function, exhibition news and history of SOONPORT. As the landing page, history section can navigate user to manufacturing page, the searching function will navigate to product page and show the detail of product.'},
                {page:'Products',content:'In Product page, user can do the search and switch category to see all products SOONPORT have now. Also, the PDF reader shows the old serial of the product. '},
                {page:'Manufacturing & Quality',content:'In manufacturing page, user can switch the manufacturing section to see wire & screw manufacture details, and check the certifications & equipment here.'},
                {page:'PDF Reader',content:'In PDF Reader, user can see the DM online or download the PDF directly.'},
                {page:'Popup Page',content:'Pop section contains "Language Switch" and "Contact Board", user can switch the language with i18N function or contact SOONPORt directly.'}
            ]
        }
    },
    mounted(){
        this.$emit('Switch',this.Show)
    },
    methods: {
        Switch(page){
            this.Show = page
            this.$emit('Switch',{...page})
        },
        Handle_scroll(){
            
        }
    },
}
</script>