<template>
    <div class="link">
        <ul>
          <li>
            <h4 @click="go_link(google)">Go to Research Google Slide</h4>
          </li>
          <li>
            <h4 @click="go_link(PDF)">Download Research PDF</h4>
          </li>
        </ul>
      </div>
</template>
<script>
export default {
    name:'go_link',
    props:{
        google:String,
        PDF:String
    },
    methods: {
        go_link(Link){
            window.open(Link,'_blank')
        }
    },
}
</script>