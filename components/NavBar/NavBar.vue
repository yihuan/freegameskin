<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 小程序等的状态栏 -->
			<view :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="navbar-content" :style="{ height: navbarHeight + 'px', width: contentWidth + 'px' }">
				<slot></slot>
			</view>
		</view>
		<!-- navbar 占位元素，将内容撑开防止被 navbar 覆盖 -->
		<view :style="{ height: (navbarHeight + statusBarHeight) + 'px' }"></view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const statusBarHeight: Ref<number> = ref(0)
const navbarHeight: Ref<number> = ref(45)
const contentWidth: Ref<number> = ref(375)

const info = uni.getSystemInfoSync()
statusBarHeight.value = info.statusBarHeight!
contentWidth.value = info.windowWidth!

// #ifndef H5 || APP-PLUS || MP-ALIPAY
// 小程序胶囊按你位置
const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
navbarHeight.value = menuButtonInfo.bottom - statusBarHeight.value + (menuButtonInfo.top - statusBarHeight.value)
contentWidth.value = menuButtonInfo.left
// #endif
</script>

<style lang="scss">
.navbar {
  &-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    background-color: aqua;

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      box-sizing: border-box;
    }
  }
}
</style>
