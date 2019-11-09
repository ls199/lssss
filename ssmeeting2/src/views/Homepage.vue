<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <!-- <nav class="button" style="float:left;	margin:0px -0px -0px 11px;">
      
      <nav class="container" style="margin:-48px -0px -0px 800px;">
        <ui>
          <img 
            style="width: 50px;height:50px; float:left; margin:-20px -0px -0px 10px;"
            src="https://static.runoob.com/images/mix/cinqueterre.jpg"
            class="rounded-circle"
            alt="Cinque Terre"
          />
          <p>xiaoxiao</p>
        </ui>
      </nav>
    </nav>-->
    <li style="margin:0;">
      <img
        style="float:left; margin:0px -0px -0px -100px; width:710px; height:180px"
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3554172822,4073732511&fm=15&gp=0.jpg"
      />
    </li>

    <div>
      <li style="float:left;	margin:0;
	">
        <Lunfantu></Lunfantu>
      </li>
      <li style="float:left;	margin:0px -0px -0px 11px;
	">
        <DaoHang></DaoHang>
      </li>
    </div>
    <div style="float:left;">
      <li style="float:left;	margin:0;">
        <a>
          <img
            src="http://ossweb-img.qq.com/images/clientpop/act/lol_1568305303_uploadnewsImg.jpg"
            alt="小小英雄第四系列"
            width="100"
            height="135px"
          />
        </a>
      </li>
      <li style="float:left;	margin:0;">
        <a>
          <img
            src="http://ossweb-img.qq.com/images/clientpop/act/lol_1566648661_uploadnewsImg.jpg"
            alt="K/DA周边新品"
            width="100"
            height="135px"
          />
        </a>
      </li>
      <li style="float:left;	margin:0px -0px -0px -10px; width:260px;">
        <nav class="TRs">
          <li>
            <u>
              <a href="#">1. 英雄联盟大区服务器实时查询</a>
            </u>
          </li>
          <li>
            <u>
              <a href="#">2. 2020季前玩法：元素崛起 tr style="height:34px;"</a>
            </u>
          </li>
          <li>
            <u>
              <a href="#">3. FPX和G2决战巴黎 谁能创造全新历史</a>
            </u>
          </li>
          <li>
            <u>
              <a href="#">4. 一鸣惊人 涅槃火耀！恭喜FPX5555444晋级决赛</a>
            </u>
          </li>
        </nav>
      </li>

      <li style="float:left;	margin:0px -0px -0px -10px;">
        <a>
          <img
            src="http://ossweb-img.qq.com/images/clientpop/act/lol_1566648661_uploadnewsImg.jpg"
            alt="K/DA周边新品"
            width="270"
            height="135"
          />
        </a>
      </li>
    </div>

    <br />

    <slider :img="img" :width="width" :height="height"></slider>
  </div>
</template> 
<script>
/*export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
}*/
// import swiper from 'swiper'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TRs li {
  height: 34px;
  width: 220px;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 100%em; /*不允许出现半汉字截断*/
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(0, 0, 0);
}
a:hover {
  color: rgb(2, 56, 233);
}
</style>