<template>
    <aside class="fixed_home side_right" @click="Show_contact">
        <transition enter-active-class="animate__animated animate__fadeInRight animate__faster">
            <ul v-if="Fold">
                <li>IN</li>
                <li>M</li>
                <li>Git</li>
            </ul>
        </transition>
        <icon_arrow_up
            :Hover="false"
            :Active="false"
        />
        <p>
            contact
        </p>
    </aside>
</template>
<script>
import icon_arrow_up from '../icons/icon_arrow_up'
export default {
    name:"Right_side",
    data() {
        return {
            Fold:false
        }
    },
    components:{
        icon_arrow_up
    },
    methods: {
        Show_contact(){
            this.Fold = !this.Fold
        }
    },

}
</script>