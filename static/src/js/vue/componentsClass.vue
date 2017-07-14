<template>
    <div>
        <header class="cd-header" v-show="editStatus">
            <router-link to="/"><span class="cd-arrow-back"></span></router-link>
            <span class="cd-head-menu" @click="editHandler">+</span>
        </header>
        <!-- 分类项目 -->
        <div class="cc-wrapper" v-show="editStatus">
            <div class="cc-item" v-for="item in comClass" @click="editHandler">
                <span>{{item}}</span>
                <span class="arrow-right">></span>
            </div>
        </div>
        <!-- 添加分类 -->
        <div class="edit-class" v-show="!editStatus">
            <span class="edit-class-item" @click="comClassHandler">{{selectedClass}}</span>
            <span class="edit-class-item" @click="comSortHander">{{selectedSort}}</span>
            <div class="addGoods-btn" @click="handlerFinish">完成</div>
        </div>
        <selectCom :onSelectData="selectData" :onSelectShow="SelectShow" v-show="selectDevice" @click.native="selectBGHandle" v-on:deliver="onDeliver">
        </selectCom>
    </div>
</template>

<script>
    require("../../scss/componentsClass.scss");
    import selectCom from "./select.vue";
    export default {
        data(){
            return {
                comClass:["分类1","分类2","分类3"],
                comSort:["排序1","排序2","排序3"],
                // 编辑分类
                editStatus:true,
                selectData:[], //传递给select组件的数组
                selectDevice:false, //选择组件背景
                SelectShow:false, //选择组件选项内容
                selectedClass:"分类名称", //已经选择的分类
                selectedSort:"排序", //已经选择的排序
            }
        },
        components:{
            selectCom
        },
        mounted(){
        },
        methods:{
            editHandler(){
                this.editStatus = !this.editStatus;
            },
            handlerFinish(){
                this.editHandler();
            },
            comClassHandler(){
                this.selectData = this.comClass;
                this.selectComHandle();
            },
            comSortHander(){
                this.selectData = this.comSort;
                this.selectComHandle();
            },
            //点击选择框隐藏select组件
            selectBGHandle(){
                this.selectDevice = false;
                this.SelectShow = false;
            },
            selectComHandle(){
                this.selectDevice = true;
                (function(self){
                    setTimeout(function(){
                        console.log(self);
                        self.SelectShow = true;
                    },0);
                })(this)
            },
            //父子组件通信
            onDeliver(arg){
                console.log(arg);
                if(this.selectData == this.comClass){
                    this.selectedClass = arg;
                }else{
                    this.selectedSort = arg;
                }
            }
        }
    }
</script>