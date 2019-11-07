<template>
   <form @submit.prevent="submit">
     <section>
         <h2>{{title}}</h2>
         <slot/>
         <div>
             <slot name="Actions"/>
         </div>
     </section>
     <transition name="fadc">
         <loading v-if="busy" class="overlay"/>
     </transition>  
 </form>
</template>

<script>
export default {
props:{
    title:{
        type:String,
        required:true,
    },
    operation:{
        type:Function,
        required:true,
    },
    valid:{
        type:Boolean,
        required:true,
    }
},
data(){
    return{
        error:null,
        busy:false,
    }
},
methods:{
    async sunit(){
        if(this.valid && !this.busy){
            this.error=null,
            this.busy=true
            try{
                await this.operation()
            }
            catch(e){
                this.error=e.error
            }
            this.busy=false
        }
    }
}
 
}
</script>
<style scoped>
</style>  