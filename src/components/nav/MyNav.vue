<template>
  <div>
    <el-row>
      <el-col :span="11" class="my-nav-logo">
        <a href="/">
          <img class="my-nav-logo-img" src="../../assets/logo.png"/>
        </a>
      </el-col>
      <el-col :span="13">
        <el-menu mode="horizontal" class="my-nav">

          <el-menu-item class="my-nav-item" v-for="menu in menuList" :key="menu.id">
            <a :href="menu.path">{{menu.title}}</a>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MyNav',
  data () {
    return {
      msg: '这是导航栏'
    }
  },
  props: {
    menuList: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.my-nav-logo{
  text-align: center;
  padding: 12px 0;
}
.my-nav-logo-img{
  width: 58px;
  height: 48px;
  margin-top: 5px;
}
.my-nav {
  background: none;
  border: none;
  color: white;
}
.my-nav-item{
  padding: 10px;
  text-align: center;
  color: white;
}
.my-nav-item>a{
  padding: 6px 24px;
  text-decoration: none;
  border: rgba(208,208,208, 0.5) solid 1px;
  border-radius: 2px;
}
.my-nav-item>a:hover{
  background: white;
  color: black;
}
.el-menu-item{
  background: none !important;
}
</style>
