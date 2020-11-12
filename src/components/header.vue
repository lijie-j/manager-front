<template>
  <div class="header-wrapper" :class="{'header-wrapper-hide': !visible}">
    <div class="header">
      <div class="header-left">
        <img src="@/assets/images/logo.png" alt class="logo" @click="returnhome" />
      </div>
      <div class="header-right">
        <el-menu
          :default-active="$route.path"
          class="el-menu-wrapper"
          align="center"
          mode="horizontal"
          text-color="#474747"
          active-text-color="#1060FB"
        >
          <template v-for="(item, index) in routers" class="menu-items">
            <template v-if="!item.children">
              <el-menu-item :index="item.url" @click="routes(item)" :key="index">{{item.name}}</el-menu-item>
            </template>
            <!-- <template v-else>
              <el-submenu :index="item.index" :key="index">
                <template slot="title" @click="routes(item)" :index="item.url">{{item.name}}</template>
                <el-menu-item v-for="(val, key) in item.children" :key="key" :index="val.url" @click="routes(val)">{{ val.name }}</el-menu-item>
              </el-submenu>
            </template> -->
          </template>
        </el-menu>
      </div>
      <!-- <user-info></user-info> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const HIDE_HEIGHT = 420

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
  computed: {
    ...mapGetters([
      
    ])
  },
  watch: {
    
  },
  created() {
    window.addEventListener('scroll', this._handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this._handleScroll)
  },
  methods: {
    returnhome() {
      if (this.$route.name === 'home') return
      this.$router.push({ name: 'home' })
    },
    _handleScroll() {
      if (window.scrollY < this.scrollY) {
        if (!this.visible) {
          this.visible = true
        }
      }
      if (window.scrollY >= HIDE_HEIGHT && window.scrollY > this.scrollY) {
        if (this.visible) {
          this.visible = false
        }
      }
      this.scrollY = window.scrollY
    },
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
    width: 1138px;
    height: 40px;
    display: flex;
    .header-left {
      width: 270px;
      height: 40px;
      line-height: 40px;
      margin-top:10px;
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
      width: 800px;
      height: 40px;
    }
    .el-menu {
      li {
        height: 40px;
        line-height: 40px;
        padding: 0;
        margin: 0 28px;
        font-size: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
<style lang="scss">
  // .header-wrapper{
    .el-menu.el-menu--horizontal{
      border-bottom:none;
    }
    .el-menu{
      background:#000;
    }
    .el-menu-item{
      color:#aaaaaa!important;
      border-bottom-color:none!important;
    }
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus{
      background:none;
      color:#fff!important;
    }
    .el-menu--horizontal>.el-menu-item{
      border-bottom:none;
    }
  // }
</style>