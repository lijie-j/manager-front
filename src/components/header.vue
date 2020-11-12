<template>
  <div class="header-wrapper" :class="{'header-wrapper-hide': !visible}">
    <div class="header">
      <div class="header-left">
        <img src="@/assets/images/logo.png" alt class="logo"/>
      </div>
      <div class="header-right">
        <a v-for="(item, index) in routers" :index="item.url" @click="routes(item)" :key="index">{{item.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      visible: true,
      routers: [
        {
          name: '数据集成',
          url: '/data-integrate',
          index: '1'
        },
        {
          name: '数据资产',
          url: '/data-property',
          index: '3'
        },
        {
          name: '数据建模',
          url: '/data-model',
          index: '4',
          // isExternalLink: true
        },
        {
          name: '数据萃取',
          index: '5',
          url: '/data-extract'
        }
      ]
    }
  },
  methods: {
    routes(val) {
      if (this.$route.fullPath === val.url) {
        return
      }
      if (val.isExternalLink) {
        window.open(val.url)
      } else {
        this.$router.push(val.url)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  height:40px;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  color:#fff;
  background: #000;
  transition: transform 0.3s ease;
  box-shadow: 0px 3px 6px 0px rgba(13, 43, 138, 0.07);
  &-hide {
    transform: translateY(-100%);
  }
  .header {
    display: flex;
    .header-left {
      width: 20%;
      height: 40px;
      line-height: 40px;
      margin-top:10px;
      display:flex;
      align-items: center;
      justify-content: center;
      img{
        width: auto;
        height:20px;
        margin-bottom:20px;
        background:#000;
      }
    }
    .logo {
      cursor: pointer;
      width:147px;
    }
    .header-right {
      height: 40px;
      display: flex;
      flex:1;
      align-items: center;
      a{
        min-width:100px;
        flex:0 1 15%;
        color:#aaaaaa;
        cursor: pointer;
        &:hover{
          color:#fff;
        }
      }
    }
  }
}
</style>