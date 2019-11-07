<template>
  <main class="login">
    <h1>登入</h1>
    <form>
      <Formlnpu name="username" v-model="username" placeholder="Username" />
    </form>
    <!-- <SmartForm class="form" :title="title" :operation="operation" :class="valid"> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      mode: "login",
      username: ""
    };
  },
  computed: {
    title() {
      switch (this.mode) {
        case "login":
          return "登入页";
        case "signup":
          return "欢迎创建账号";
      }
    }
  }
};
</script>
<style scoped>
</style>