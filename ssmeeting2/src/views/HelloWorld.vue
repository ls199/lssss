
<template>
  <div>
    <HelloWorld :list="elList" :fnoptions="optionsFn" style="float:left;	margin:0px 0px 0px -15px; width:780px;">
      <div slot="0" class="HE">
        <the-all-game :list="gameAllList">
          <HelloWorldss></HelloWorldss>
        </the-all-game>
      </div>
      <div class slot="-1">
        <the-collect :list="gameCollectList">
          <PLAyss></PLAyss>
        </the-collect>
      </div>
      <div class slot="1">
        <the-collect :list="gameCollectList">
          <Plays></Plays>
        </the-collect>
      </div>
      <div class slot="2">
        <the-collect :list="gameCollectList">
          <index></index>
        </the-collect>
      </div>
    </HelloWorld>

    <HY style="   float: right;"></HY>
  </div>
</template>

<script>
//import MatchReportList from '../components/MatchReportList'

$(function() {
  $("div").each(function() {
    $(this).attr("the-all-game", "");
  });
});
</script>
<style scoped>
</style>