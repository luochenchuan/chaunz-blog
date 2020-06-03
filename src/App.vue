<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <el-row>
      <el-col :span="24" class="nav">
          导航
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
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  margin: 0;
  padding: 0;
  background: url("./assets/background/bg-2.jpg") no-repeat 0;
  -webkit-background-size: cover;
  background-size: cover;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.nav{
  height: 80px;
  background: rgba(208,208,208, 0.5);
}
.main-left{
  background: antiquewhite;
}
.main-right{
  height: 550px;
}

</style>
