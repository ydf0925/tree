<template>
   <div>
       <div class="title" @click="change($event)">
              <slot name="title"></slot>
              <!--name='title'区分插槽 -->
          </div>
          <div class="sub" v-show="flag"> 
              <slot name="sub"></slot>
          </div>
   </div>
</template>

<script>
   export default {
       name:'SubTree',
       data(){
            return {
              flag:false
              }
        },
        methods:{
            change(event){
              var img = event.currentTarget.firstChild
              img.classList.toggle('active')
              this.flag=!this.flag
            }
        }
   }
</script>

<style scoped>
.sub{
    padding-left:20px;
}

.active {
        transform-origin: (50%,50%);
        transform: rotate(90deg);
}
</style>