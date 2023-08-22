<template>
	<view class="container" @click="handleOpen">
		<NavBar>
      <view class="navbar-search">
      	<view class="navbar-search__icon">
          <uni-icons type="search" size="16" color="#999"></uni-icons>
        </view>
      	<view class="navbar-search__text">搜索想要的皮肤</view>
      </view>
    </NavBar>
		<view v-for="item in 100">{{ item }}</view>
	</view>
</template>

<script lang="ts" setup>
import { onLoad, onReady } from '@dcloudio/uni-app'

function handleOpen() {
	console.log('opened')
}

onLoad(() => {
	console.log('Loading')
})

onReady(() => {
	console.log('Ready')
})
</script>

<style lang="scss">
.container {
  .navbar-search {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    background-color: #fff;
    border-radius: 30px;
    padding: 0 10px;

    &__icon {
      margin-right: 10px;
    }

    &__text {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
