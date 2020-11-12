<template>
  <div class="data-integrate">
    <div class="nav">
      <el-collapse accordion>
        <el-collapse-item title="数据一" name="1">
          <div @click="handleChange">数据一</div>
        </el-collapse-item>
        <el-collapse-item title="数据二" name="2">
          <div @click="handleData">数据二</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    handleChange(){
      this.$router.push('/data-one')
    },
    handleData(){
      this.$router.push('/data-two')
    }
  }
}
</script>
<style lang="scss" scoped>
  .data-integrate{
    display:flex;
    .nav{
      flex:20%;
      min-width:150px;
      height:calc(100vh - 40px);
      background:#304156;
    }
    .container{
      margin-left:20px;
      flex:80%;
      display:flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
<style lang="scss">
  .el-collapse-item__header{
    background:rgb(48, 65, 86);
    color:#fff;
    border-bottom:none;
    padding-left:10px;
  }
  .el-collapse-item__wrap{
    background: #1f2d3d!important;
  }
  .el-collapse-item__content{
    padding:15px;
    color:#fff;
  }
</style>