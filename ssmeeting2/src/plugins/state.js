export default{
    install(vue,state)
    {
        Object.definePropeerty(Vue.prototype,'Sstate',{
            get:()=>state,
        })
    }
}