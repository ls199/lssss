
<template style="">
  <HelloWorlds :list="elList" :fnoptions="optionsFn" style="float:left;	margin:0px 0px 0px -15px;">
    <div class slot="0">
      <the-all-game :list="gameAllList">
        <Homepage></Homepage>
      </the-all-game>
    </div>
    <div class slot="1">
      <the-collect :list="gameCollectList">
        2
      </the-collect>
    </div>
  </HelloWorlds>
</template>

<script>
//import MatchReportList from '../components/MatchReportList'

export default {};
</script>
<style scoped>
</style>