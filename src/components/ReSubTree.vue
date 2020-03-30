<template>
       <SubTree>
        <template slot="title">
          <img src="https://cfan.cc/tc/static/img/tree.png">{{data.title}}
        </template>
        <template v-for="child of data.next" slot="sub">
            <Fctree :key="child.id" v-if="!child.next">
            <img src="https://cfan.cc/tc/static/img/file.png">{{child.title}}
            </Fctree>
            
            <ReSubTree v-else :key="child.id" :data="child"></ReSubTree>
        </template>
    </SubTree>
</template>

<script>
import SubTree from './SubTree'
import Fctree from './Fctree'
   export default {
       name:'ReSubTree',
       props:{
            data:{
                type:Object,//属性校验，为对象数据类型，并且如果没有赋值，默认给一个空对象
                default:()=>({})
            }
        },
        components:{
            SubTree,
            Fctree
        },
   }
</script>

<style scoped>

</style>