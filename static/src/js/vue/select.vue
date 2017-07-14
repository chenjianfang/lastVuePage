<template>
    <div class="select-box">
        <ul class="select-lists" :class="{'select-device':selectShow}">
            <li v-for="item in onSelectData" @click="deliver(item)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props:['onSelectData','onSelectShow'],
        methods:{
            deliver(arg){
                this.$emit("deliver",arg);
            }
        },
        computed:{
            selectShow(){
                return this.onSelectShow;
            }
        }
    }
</script>