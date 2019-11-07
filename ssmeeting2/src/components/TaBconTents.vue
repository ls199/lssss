<template>
  <div class="container">
    <div class="header">
      <button
        class="title"
       
        @click="open(item.id)"
      >
        {{item.name}}
       
      </button>
      
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
            name: "全部游戏",
            nameto:"wode"
          },
          {
            id: 1,
            name: "我的最爱",
           
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
</style>  