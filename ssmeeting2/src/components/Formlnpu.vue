<template>
  <div class="row">
      <input class="input"
      :class="inputclass"
      :name="name"
      :type="type"
      :value+pro="value"
      :placeholder="placeholder"
      @input="update"/>

  </div>
</template>

<script>
export default {
props:{
    model:{
        prop:'text',
        event:'updata',

    },
    name:{ 
        type:String,
    },
    type:{
        type:String,
        default:'text',
    },
    text:{
        required:true

    },
    value:{
        required:true,
    },
    placeholder:{
        type:String,
    },
    invalid:{
        type:Boolean,
        default:false,
    }
},
computed:{
    inputClass(){
        return{
          'invalid':this.invalid,
        };
    },
    elment(){
        return this.type===textarea ? this.type:'input'
    }
},

nethods:{
    update(event){
        this.$semit(update,event.currentTarget.value)
    }
}
};
</script>

<style scoped>

</style>