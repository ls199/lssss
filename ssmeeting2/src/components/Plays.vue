<template>
  <div>
    <input type="radio" id="runoob" value="Runoob" v-model="picked" />
    <label for="runoob">自选模式</label>
    <br />
    <input type="radio" id="google" value="Google" v-model="picked" />
    <label for="google">排位赛 单排/双排</label>
    <br />
    <input type="radio" id="googles" value="Googles" v-model="picked" />
    <label for="googles">排位赛 灵活排位</label>
    <br />
    <nav>
      
      <button :to="'test'" class="butts" >
        <img src="..//assets/quxiao.png" />
        
      </button>
      <button class="butt">确认</button>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "Runoob"
    };
  }
};
</script>

<style>
nav{

  
  float: left;
  margin: 50px 0px 0px -0px;
}
.butt {
  width: 150px;
  height: 30px;
}
.butts {
  width: 40px;
  height: 30px;
}
.butts img {
  width: 100%;
  height: 100%;
}
</style>