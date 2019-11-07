<template>
  <div class="container">
    <div class="header" >
      <a href="#"
        class="title"
        :class="index === active? 'active' : ''"
        v-for="(item, index) in tabList"
        :key="index"
        @click="open(item.id)"
        style="display: table-cell;text-align: center;"
      >{{item.name}}</a>
    </div>
    <div class="content">
      <div class="wrap">
        <slot :name="active"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-content",
  data() {
    return {
      active: 0,
      tabList: this.list,
      runfn: this.fnoptions
    };
  },
  components: {
    // ScrollComponent
  },
  props: {
    list: {
      type: Array,
      default() {
        return [
            {
            id: 0,
            name: "首页"
          },
          {
            id: 1,
            name: "1"
          },
          {
            id: 2,
            name: "2"
          },
          {
            id: 3,
            name: "3"
          },
          {
            id: 3,
            name: "4"
          }
        ];
      }
    },
    fnoptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    open(id) {
      this.active = id;
      if (this.runfn[id]) {
        this.runfn[id].runFn();
      }
    }
  }
};
</script>
<style scoped>
.header{
  float:left;	margin:0px 0px 0px -10px;
}
.header a{
  float:left;	margin:0px 0px 0px 10px;
}
</style>  