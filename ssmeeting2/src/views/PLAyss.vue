
<template style="">
  <Play :list="elList" :fnoptions="optionsFn" style="float:left;	margin:0px 0px 0px -15px;">
    <div class slot="0">
      <the-all-game :list="gameAllList">
        <Plays class="Plays"></Plays>
      </the-all-game>
    </div>
    <div class slot="1">
      <the-collect :list="gameCollectList">
      </the-collect>
    </div>
    <div class slot="2">
      <the-collect :list="gameCollectList">
        <Plays class="Plays"></Plays>
      </the-collect>
    </div>
    <div class slot="3">
      <the-collect :list="gameCollectList">
       
      </the-collect>
    </div>
  </Play>
</template>

<script>
//import MatchReportList from '../components/MatchReportList'

export default {};
</script>
<style scoped>
.Plays{
  float: left;
  margin: 310px 0px 0px -650px;
}
</style>