<template>
    <div class="insurance-wrap">
        <!-- 头部标签 -->
        <header class="header">
            <router-link to="/carOwnInfor"><span class="arrow-back"></span></router-link>
            <span class="head-title">车险投保</span>
            <span class="share"></span>
        </header>
        
        <div class="insurance-declare">
                报价信息
            </div>
            <div class="declare-detail">
                <span>方案详情：</span>
                <div class="detail-wrapper">
                    <p>商业险起保日期：2017-08-09生效</p>
                    <p>交强险起保日期：2017-08-09生效</p>
                </div>
            </div>
            <form class="form-list">
                <div class="insurance-item">
                    <span class="insurance-name">保障条款</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">全选
                    </div>
                    <div class="insurance-select">
                        保额
                    </div>
                    <span class="insurance-price">保费(元)</span>
                </div>

                <div class="insurance-item">
                    <span class="insurance-name">机动车损失保险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                        <input type="text">元
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">第三者责任保险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                        <select>
                            <option value="1">1万</option>
                            <option value="2">2万</option>
                        </select>
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">盗抢险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                        <input type="text">
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">车上人员险(司机)</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                        <select>
                            <option value="1">1万</option>
                            <option value="2">2万</option>
                        </select>
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">车上人员险(乘客)</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select repair-select">
                        <div>
                            <select style="width:70%;">
                                <option value="1">1万</option>
                                <option value="2">2万</option>
                            </select>\座
                        </div>
                        <div style="width:130%;">
                            共-1座
                        </div>
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">玻璃单独破碎险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                        <input type="text">元
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">自燃损失险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                        <input type="text">元
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">车身划痕损失险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                        <input type="text">元
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">发动机涉水损失险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">修理期间费用补偿险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select repair-select">
                        <div>
                            <input type="text" style="width:80%;">元
                        </div>
                        <div style="width:130%;">
                            停驶
                            <input type="text" style="width:48%;">天
                        </div>
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">精神损害抚慰金责任险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                        <select>
                            <option value="1">1万</option>
                            <option value="2">2万</option>
                        </select>
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">车辆损失保险无法找到第三方特约险</span>
                    <div class="insurance-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="insurance-select">
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>
                <div class="insurance-item">
                    <span class="insurance-name">不计免赔险</span>
                    <div class="insurance-nocal">
                        <div class="nocal-item">
                            <input type="checkbox">车损
                            <input type="checkbox">车上人员
                        </div>
                        <div class="nocal-item">
                            <input type="checkbox">三者
                            <input type="checkbox">盗抢
                        </div>
                        <div class="nocal-item">
                            <input type="checkbox">自燃
                            <input type="checkbox">发动机
                        </div>
                        <div class="nocal-item">
                            <input type="checkbox">划痕
                            <input type="checkbox">精神损害
                        </div>
                    </div>
                    <span class="insurance-price">0.00</span>
                </div>

                <!-- 交强险 -->
                <div class="power-insurance">
                    <div class="power-insurance-txt">
                        交强险
                    </div>
                    <input class="power-insurance-input" type="text">
                    <div class="power-insurance-price">
                        0.00
                    </div>
                </div>
            </form>
            <!-- 底部 -->
            <footer class="car-footer clearfix">
                <router-link to="/carOwnInfor"><div class="car-footer-left">上一步</div></router-link>
                <router-link to="/order"><div class="car-footer-right">下一步</div></router-link>
            </footer>
    </div>
</template>

<script>
    require("../../scss/insurance.scss");
    export default {
        data(){
            return {
                btnActive:false,
                msgBoxActive:false,
            }
        },
        methods:{
            changeBtn(){
                this.btnActive = !this.btnActive;
            },
            showQuestion(){
                this.msgBoxActive = true;
            },
            msgBoxClose(){
                this.msgBoxActive = false;
            }
        }

    }
</script>