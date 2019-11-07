<template>
  <div id="app" style="width: 1000px;height:600px; border: 3px solid #73AD21;float:left;	margin:0px 0px 0px 25px;">
  <!--  <nav> style="float:left;	margin:0px 0px 0px -15px;"
    style="width: 1000px;height:600px;background-color:black;"
      <router-link :to="'/'">主页</router-link>
      <router-link :to="'test'">测试</router-link>
      <router-link :=to"'result'">赛事资讯</router-link>
    </nav>-->
  
    <!--<img src="./assets/logo.png">-->
     
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
