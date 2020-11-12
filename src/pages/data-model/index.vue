<template>
  <div class="data-integrate">
    <div class="nav">
      <el-collapse accordion>
        <el-collapse-item title="数据五" name="1">
          <div @click="handleChange">数据五</div>
        </el-collapse-item>
        <el-collapse-item title="数据六" name="2">
          <div @click="handleData">数据六</div>
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
      this.$router.push('/model-one')
    },
    handleData(){
      this.$router.push('/model-two')
    }
  }
}
</script>
<style lang="scss" scoped>
  .data-integrate{
    width:1109px;
    display:flex;
    .nav{
      width:215px;
      height:calc(100% - 40px);
      background:#304156;
    }
    .container{
      margin-left:20px;
    }
  }
</style>