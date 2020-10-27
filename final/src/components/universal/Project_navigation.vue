<template>
    <div class="project_navigation">
        
    </div>
</template>
<script>
export default {
    name:"Project_navigation",
    props:{
        List:Array,
        Position:Number,
        Height:Number
    },
    data() {
        return {
            Hover:false,
            Fold:false
        }
    },
    methods:{
        Go_next(){},
        Go_previous(){},
        Folding(){
            this.Fold = !this.Fold
        }
    }
}
</script>