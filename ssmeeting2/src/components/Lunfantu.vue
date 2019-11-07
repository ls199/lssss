<template>
  <div>
    <slide-show class="slide-show" :slides="slides" :inv="invTime"></slide-show>
  </div>
</template>

<script>
import slideShow from '../components/slideShow.vue'
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
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
      ]
    };
  }
};
</script>

<style>
.slide-show {
  width: 430px;
  height: 180px;
}
.slide-show img {
  width: 100%;
  height: 100%;

}
</style>