<template>
  <div id="app">
    
    <Tree>
        <template v-for="item of msg">
          
                <!-- <Fctree :key="item.id" v-if="item.next"></Fctree>         -->
                <!-- <SubTree :key="item.id">
                    <template slot="title">
                      {{item.title}}
                      </template>
                    <template v-for="child of item.next">
                        <Fctree :key="child.id">
                          {{child.title}}
                        </Fctree>
                    </template>
                </SubTree> -->
                <ReSubTree :key="item.index" :data="item"></ReSubTree>
                
        </template>
   </Tree>

  </div>
</template>

<script>
import Tree from './components/Tree'
import SubTree from './components/SubTree'
import Fctree from './components/Fctree'
import ReSubTree from './components/ReSubTree'
import { request } from './network/request'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Tree,
    SubTree,
    Fctree,
    ReSubTree
  },
  data() { 
    return {
      msg: '',
      // msg:[]
    }
  },
  created() {
    request({
    url: '/tc/',
    params: {
        mod: 'vue',
        act: 'getdata',
        uid: '2973',
        token: 'dd541d72dba72008a27edec117d2a592'
    }
}).then(res => {
    console.log(res.data.msg);
    this.msg = res.data.msg
    // this.msg = res.data.result.msg
}).catch(rej => {
    console.log(rej);
})
  }
}


</script>

<style>

@import './assets/base'
</style>
