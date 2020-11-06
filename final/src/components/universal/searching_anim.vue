<template>
    <div class="searching_anim">
        <div class="search_bar">
            <img :src="Icon" alt="">
            <h4 v-html="searching_text"></h4>
        </div>
        <div class="search_result">
            <ul>
                <li v-if="typing!==''"></li>
                <li v-if="Length_control=='show'" v-for="i in arr01">{{i}}</li>
                <li v-if="Length_control=='end'" v-for="i in arr02">{{i}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'ideation_searching',
    props:{
        Icon:String
    },
    data() {
        return {
            timer:null,
            str1:'kw01',
            str2:' kw02',
            typing:'',
            target:0,
            arr01:[undefined,undefined,undefined],
            arr02:[undefined]
        }
    },
    computed: {
        searching_text(){
            return this.typing==''?'Search...':this.typing
        },
        Length_control(){
            return this.typing.length == 0 ?
            false:
            this.typing.length == this.str1.length + this.str2.length?
            'end':
            this.typing.length == this.str1.length?
            'show':false
        }
    },
    mounted(){
        this.str1=this.str1.split('')
        this.str2=this.str2.split('')
    },
    watch:{
        str1:{
            handler(){
                setTimeout(()=>{
                    this.timer = setInterval(()=>{
                        this.typing += this.str1[this.target]
                        this.target += 1
                    },200)
                },1000)
            }
        },
        typing:{
            handler(){
                switch (this.typing.length) {
                    case this.str1.length:
                        clearInterval(this.timer)
                        this.target = 0
                        setTimeout(()=>{
                            this.timer = setInterval(()=>{
                                this.typing += this.str2[this.target]
                                this.target += 1
                            },200)
                        },1000)
                        break;
                    case this.str1.length+this.str2.length:
                        clearInterval(this.timer)
                        this.target = 0
                        setTimeout(()=>{
                            this.typing = ''
                        },2000)
                        setTimeout(() => {
                            this.timer = setInterval(()=>{
                                this.typing += this.str1[this.target]
                                this.target += 1
                            },200)
                        }, 3000);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
</script>