<template>
    <aside class="fixed_home go_back" @click="Go_back">
        <icon_arrow_down/>
        <h4>{{$route.name == 'About'?'Go Back':'Back Home'}}</h4>
    </aside>
</template>
<script>
import icon_arrow_down from '../icons/icon_arrow_down'
export default {
    name:'Go_back',
    components:{
        icon_arrow_down
    },
    methods:{
        Go_back(){
            return this.$route.name != 'About'?this.$router.push({path:'/home'}):this.$router.go(-1)
        }
    }
}
</script>