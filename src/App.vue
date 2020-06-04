<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <el-row>
      <el-col :span="24" class="nav">
          <MyNav :menuList="menuList"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" class="main-left">
          左边
        <img src="./assets/logo.png">
      </el-col>
      <el-col :span="14" class="main">
        <router-view/>
      </el-col>
      <el-col :span="5" class="main-right">
          右边
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyNav from './components/nav/MyNav'
export default {
  name: 'App',
  data () {
    return {
      menuList: [
        {'id': 1, 'title': '首页', 'path': '/'},
        {'id': 2, 'title': '标签', 'path': '/'},
        {'id': 3, 'title': '分类', 'path': '/'},
        {'id': 4, 'title': '搜索', 'path': '/'},
        {'id': 5, 'title': '留言', 'path': '/'}
      ]
    }
  },
  components: {
    MyNav: MyNav
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0;
  padding: 0;
  background: url("./assets/background/bg-2.jpg") no-repeat 0;
  -webkit-background-size: cover;
  background-size: cover;
}
.nav{
  /*height: 80px;*/
  background: rgba(208,208,208, 0.5);
}
.main-left{
  background: antiquewhite;
}
.main-right{
  height: 550px;
}

</style>
