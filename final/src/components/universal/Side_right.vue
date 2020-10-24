<template>
    <aside class="fixed_home side_right" @click="Show_contact">
        <transition enter-active-class="animate__animated animate__fadeInRight animate__faster">
            <ul v-if="Fold">
                <li>IN</li>
                <li>M</li>
                <li>Git</li>
            </ul>
        </transition>
        <p>
            contact
        </p>
    </aside>
</template>
<script>
export default {
    name:"Right_side",
    data() {
        return {
            Fold:false
        }
    },
    methods: {
        Show_contact(){
            this.Fold = !this.Fold
        }
    },

}
</script>