<template>
    <div>
        <this-dialog :is-show="isShowCheckDialog"  @on-close="checkStatus">
          <div class="button" @click="checkStatus">
            支付成功
          </div>
          <div class="button" @click="checkStatus">
            支付失败
          </div>
        </this-dialog>
        <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
          购买成功！
        </this-dialog>
        <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
          购买失败！
        </this-dialog>
    </div>
</template>

<script>
    import Dialog from './base/dialog.vue'
    export default {
        components:{
            thisDialog:Dialog
        },
        props:{
            isShowCheckDialog:{
                type:Boolean,
                default:false
            },
            orderId:{
                type:[String,Number]
            }
        },
        methods:{
            checkStatus () {
              this.$http.post('/api/checkOrder',{
                  orderId:this.orderId
              })
                      .then((res)=>{
                        this.isShowSuccessDialog=true
                        this.$emit('on-close-check-dialog')
                      },(err)=>{
                        this.isShowFailDialog=true
                        this.$emit('on-close-check-dialog')
                      })
            },
            toOrderList () {
              this.$router.push({path:'/orderList'})
            }
        },
        data () {
          return {
              isShowSuccessDialog:false,
              isShowFailDialog:false
          }
        }
    }
</script>

<style>
</style>
