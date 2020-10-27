<template>
    <aside class="navigation">
        <div class="expand">
            <icon_expander
            />
        </div>
        <div class="list">
            <div><h5>Prevous</h5></div>
            <ul>
                <li>
                    <h4>Project Overview</h4>
                    <p>{{Math.floor(Height)}}</p>
                </li>
            </ul>
            <div><h5>Next</h5></div>
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
        Height:Number
    },
    data() {
        return {
            Active:false,
            Hover:false
        }
    },
}
</script>