<template>
  <div class="container" style="width:270px; height:180px; border: 3px solid #73AD21;">
    <div class="header" style="width:100%; display: table;">
      <button
        class="title"
        :class="index === active? 'active' : ''"
        v-for="(item, index) in tabList"
        :key="index"
        @click="open(item.id)"
        style="display: table-cell;text-align: center;"
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
            name: "公告",
           
          },
          {
            id: 1,
            name: "赛事",
           
          },
          {
            id: 2,
            name: "攻略",
           
          },
          {
            id: 3,
            name: "社区",
          
           
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