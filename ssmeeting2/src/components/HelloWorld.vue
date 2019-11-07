<template>
  <div class="container">
    <div class="header">
      <a
        href="#"
        class="title"
        :class="index === active? 'active' : ''"
        v-for="(item, index) in tabList"
        :key="index"
        @click="open(item.id)"
        style="display: table-cell;text-align: center; "
      >
        <h1>{{item.name}}</h1>
      </a>
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
            id: -1,
            name: "PLAY"

          },
          {
            id: 0,
            name: "主页"

          },
          {
            id: 1,
            name: "生涯"
          },
          {
            id: 2,
            name: "商城"
          },
          
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
 
.header a {
  width: 110px;
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  color: black;
  border-right: 3px solid rgb(13, 45, 190);
	border-left-style:none;
  border-bottom-style:none;
	border-top-style:none;
}
.header a:hover {
  background-color: #008cba;
  color: white;
}
.header a h1 {
  font-family: verdana;
  text-align: center;
}
</style>  