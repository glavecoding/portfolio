<template>
    <aside 
    class="navigation"
    @mouseenter="Show_control = true"
    @mouseleave="Show_control = false"
    >
        <div class="list">
            <ul v-if="List" :class="Show_control?'list-hover':''">
                <li class="title">
                   <h4 data-text="Navigation">Navigation</h4>
                </li>
                <li
                v-for="item in List"
                :class="item.name == List_now?'active-only':''"
                @click="Go_sec(item.height)"
                >
                    <h4 v-if="item.name == List_now || Show_control">{{item.name}}</h4>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script>
import icon_expander from '../icons/icon_expander'
export default {
    name:'Navigatoin',
    components:{
        icon_expander
    },
    props:{
        Height:Number,
        List:Array
    },
    data() {
        return {
            Active:false,
            Hover:false,
            List_now:'',
            Show_control:false
        }
    },
    methods: {
        Go_sec(h){
            const scroll_position = h - 160
            window.scrollTo(0,scroll_position)
        }
    },
    watch:{
        Height:{
            handler(){
                if(this.List && this.List.length>0){
                    const Arr = [...this.List]
                    const test = Arr.filter(item=>this.Height>item.height)
                    const name = test.length>0?test.pop()['name']:'overview'
                    this.List_now = name
                }
            }
        }
    }
}
</script>