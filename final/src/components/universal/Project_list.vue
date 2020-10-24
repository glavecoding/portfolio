<template>
    <div class="project_list">
        <img src="" alt="">
        <div class="wrapper_project_list">
            <h1 class="number"></h1>
            <h1>Title</h1>
            <ul>
                <li>
                    tags
                </li>
            </ul>
            <div>
                <p>See more</p>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        image_src:String,
        tag_list:Array,
    },
    components:{
        
    }
}
</script>