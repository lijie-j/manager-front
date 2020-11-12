<template>
  <div class="data-integrate">
    <div class="nav">
      <el-collapse accordion>
        <el-collapse-item title="数据一" name="1">
          <div @click="handleChange">数据一</div>
        </el-collapse-item>
        <el-collapse-item title="数据二" name="2">
          <div>数据二</div>
        </el-collapse-item>
      </el-collapse>
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
      this.$router.push('/data-model')
    }
  }
}
</script>
<style lang="scss" scoped>
  .data-integrate{
    width:1109px;
    margin:20px auto;
    display:flex;
    .nav{
      width:215px;
    }
  }
</style>