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
            Show:{page:'Home',content:'Something'},
            Pages:[
                {page:'Home',content:'Something'},
                {page:'Products',content:'Something about product'},
                {page:'Manufacturing & Quality',content:'something about manufacturing'},
                {page:'PDF Reader',content:'PDF Reader'},
                {page:'Popup Page',content:'About contact'}
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