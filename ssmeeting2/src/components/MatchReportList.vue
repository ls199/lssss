<template>
  <div>
    <MatchReportTitle
      v-for="post in posts"
      :key="post.id"
      v-bind:post="post"
      :title="post.title"
      :style="{ fontSize: postFontSize + 'em' }"
      :fontsize="postFontSize"
      v-on:enlarge-text="postFontSize += 0.1"
    ></MatchReportTitle>
  </div>
</template>
<script>
import MatchReportTitle from "../components/MatchReportTitle";
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      postFontSize: 1
    };
  },
  components: {
    MatchReportTitle
  },
  methods: {
    onchildclicked: function() {
      console.log(this);
    }
  }
};
</script>
<style  scoped>
</style>