
<template style="">
  <tabcontent :list="elList" :fnoptions="optionsFn">
    <div class slot="0" id="myTabContent">
      <the-all-game :list="gameAllList" >
        <li>
          <span class="item-type">赛事</span>
          <a>八周年战斗之夜开启领奖八周年战斗之夜开启领奖</a>
        </li>
        <li>
          <span class="item-type">赛事</span>
          <a>8周年限定皮肤现场玩家开放领取</a>
        </li>
        <li>
          <span class="item-type">赛事</span>
          <a>2019全明星赛回归拉斯维加斯</a>
        </li>
        <li>
          <span class="item-type">赛事</span>
          <a>皮肤预告片 星之守护者2019</a>
        </li>
        <li>
          <span class="item-type">赛事</span>
          <a>2019星之守护者皮肤及小小英雄上线</a>
        </li>
        <li>
          <span class="item-type">赛事</span>
          <a>2019《星之守护者：光与蚀》制作幕后花絮</a>
        </li>
      </the-all-game>
    </div>
    <div class slot="1">
      <the-collect :list="gameCollectList">22
       
      </the-collect>
    </div>
  </tabcontent>
</template>

<script>
//import MatchReportList from '../components/MatchReportList'

export default {
  data() {
    elList: [
      {
        id: 0,
        name: "全部游戏1",
        nameto: "wode"
      },
      {
        id: 1,
        name: "我的最爱",
        nameto: "wode555"
      }
    ],
      optionsFn +
        [
          { runFn: () => console.log("click tab1") },
          { runFn: () => console.log("click tab2") }
        ];
  }
};
</script>
<style scoped>

#myTabContent li {
overflow: hidden; /*自动隐藏文字*/
text-overflow: ellipsis;/*文字隐藏后添加省略号*/
white-space: nowrap;/*强制不换行*/
width: 100%em;/*不允许出现半汉字截断*/
display: block;

}
#myTabContent li a {
	margin:0px -0px -0px 10px;
}
#myTabContent li span{
	color: #6388c5;
  border: 1px #97afc5 solid;	
}
</style>