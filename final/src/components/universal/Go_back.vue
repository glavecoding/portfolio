<template>
    <aside class="fixed_home go_back" @click="Go_back">
        <icon_arrow_up/>
        <h3>Go Back</h3>
    </aside>
</template>
<script>
import icon_arrow_up from '../icons/icon_arrow_up'
export default {
    name:'Go_back',
    components:{
        icon_arrow_up
    },
    methods:{
        Go_back(){
            this.$router.go(-1)
        }
    }
}
</script>