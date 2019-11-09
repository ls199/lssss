<template>
  <div class="index-right">
    <slide-show
      style=" width: 720px;height:200px;    margin: 10px 0px 10px 0px;
"
      :slides="slides"
      :inv="invTime"
    ></slide-show>
    <div class="index-board-list">
      <div
        class="index-board-item"
        v-for="(item,index) in boardList"
        :key="index"
        :class="[{'line-last':index % 2!==0},'index-board-'+item.id]"
      >
        <div class="index-board-item-inner">
          <h4>{{item.title}}</h4>
          <p>{{item.description}}</p>

          <!-- <div class="index-board-button">
            <router-link class="button" :to="'analysis'">立即购买</router-link>
            
          </div>-->
          <div>
            <div class="mask" v-if="showModal" @click="showModal=true"></div>
            

            <div id="car" class="pop" v-if="showModal">
              <div class="index-board-item-inner">
                <h4>{{item.title}}</h4>
                <p>{{item.description}}</p>
              </div>

              <button @click="showModals=true" class="btn">确定购买</button>
              <button @click="showModal=false" class="btn">关闭</button>
            </div>

            <div class="mask" v-if="showModals" @click="showModals=true"></div>
            <div id="car" class="pop" v-if="showModals">
              购买成功！！！
              <button @click="showModals=false" class="btn">确定</button>
            </div>

            <button @click="showModal=true" class="btn">点击购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from "../components/slideShow.vue";
export default {
  components: {
    slideShow: slideShow
  },
  /*created表示的是对象创建的生命周期，创建完成的时候*/
  created: function() {
    /*HTTP的get请求*/
    this.$http
      .get("api/getNewsList")
      /*请求完毕执行then方法*/
      .then(
        function(res) {
          //成功的回调方法
          console.log(res);
          this.newsList = res.data;
        },
        function(err) {
          //失败的回调方法
          console.log(err);
        }
      );
  },
  data() {
    return {
      showModal: false,
      showModals: false,
      invTime: 2000,
      slides: [
        {
          src: require("../assets/slideShow/pic1.jpg"),
          title: "xxx1",
          href: "detail/analysis"
        },
        {
          src: require("../assets/slideShow/pic2.jpg"),
          title: "xxx2",
          href: "detail/count"
        },
        {
          src: require("../assets/slideShow/pic3.jpg"),
          title: "xxx3",
          href: "http://xxx.xxx.com"
        },
        {
          src: require("../assets/slideShow/pic4.jpg"),
          title: "xxx4",
          href: "detail/forecast"
        }
      ],
      select: "",
      boardList: [
        {
          title: "产品",
          description: "产品是一款产品",

          id: "car",
          toKey: "analysis",
          image: "../assets/images/1.png",
          saleout: false
        },
        {
          title: "产品",
          description: "产品是一款产品",
          id: "earth",
          toKey: "count",
          image: "../assets/images/1.png",
          saleout: false
        },
        {
          title: "产品产品",
          description: "产品是一款产品",
          id: "loud",
          toKey: "forecast",
          image: "../assets/images/1.png",
          saleout: true
        },
        {
          title: "产品产品",
          description: "产品是一款产品",
          id: "hill",
          toKey: "publish",
          image: "../assets/images/1.png",
          saleout: false
        }
      ]
    };
  }
};
</script>

<style>
.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.pop {
  background-color: #fff;

  position: fixed;
  top: 100px;
  left: 300px;
  width: calc(100% - 600px);
  height: calc(100% - 200px);
  z-index: 2;
}
.btn {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}

.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  /* overflow: hidden; */
}
.index-board-item {
  float: left;
  width: 350px;
  height: 140px;
  background: #fff;
  box-shadow: 0 0 1px rgb(8, 8, 8);
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner {
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner {
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-hill .index-board-item-inner {
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>