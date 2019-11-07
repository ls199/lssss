<template>
    <div>
        <h1>{{msg}}</h1>
       <ButtonCounter></ButtonCounter>
       <ButtonCounter></ButtonCounter>
       <ButtonCounter></ButtonCounter>
    </div>
</template>
<script>
import ButtonCounter from'..//components/ButtonCounter'
export default {
    data(){
        return{
          msg:'测试页面1',
        }
    },
    components:{
        ButtonCounter
    }
}
</script>
<style scoped>

</style>