<template>
    <div>
        <header class="cd-header" v-show="editStatus">
            <router-link to="/"><span class="cd-arrow-back"></span></router-link>
            <span class="cd-head-menu" @click="photoCode">+</span>
        </header>
        <!-- 设备 -->
        <div class="cc-wrapper" v-show="editStatus">
            <div class="cc-item" v-for="item in comClass" @click="editHandler">
                <span>{{item}}</span>
                <span class="arrow-right">></span>
            </div>
        </div>
        <!-- 编辑设备 -->
        <div class="edit-class" v-show="statusTable">
            <input class="edit-class-item" placeholder="设备名称">
            <span class="edit-class-item" @click="comSortHander">{{selectedSort}}</span>
            <div class="addGoods-btn" @click="handlerFinish">完成</div>
        </div>
        <!-- 扫码添加 -->
        <div class="photo-code" v-show="statusCode">扫码添加</div>
        <selectCom :onSelectData="selectData" :onSelectShow="SelectShow" v-show="selectDevice" @click.native="selectBGHandle" v-on:deliver="onDeliver">
        </selectCom>
    </div>
</template>

<script>
    require("../../scss/equipment.scss");
    import selectCom from "./select.vue";
    export default {
        data(){
            return {
                comClass:["设备1","设备2","设备3"],
                comSort:["主设备","主设备1","主设备2"],
                // 编辑分类
                editStatus:true,
                statusTable:false,
                statusCode:false,
                selectData:[], //传递给select组件的数组
                selectDevice:false, //选择组件背景
                SelectShow:false, //选择组件选项内容
                selectedClass:"", //设备名称
                selectedSort:"主设备", //设备
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
                this.statusTable = !this.statusTable;
            },
            photoCode(){
                this.editStatus = !this.editStatus;
                this.statusCode = !this.statusCode;
            },
            handlerFinish(){
                this.editHandler();
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
                this.selectedSort = arg;
            }
        }
    }
</script>