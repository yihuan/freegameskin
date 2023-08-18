<template>
	<view class="container" @click="handleOpen">
		<view class="navbar">
			<view class="navbar-fixed">
				<!-- 小程序等的状态栏 -->
				<view :style="{ height: statusBarHeight + 'px' }"></view>
				<view class="navbar-content" :style="{ height: navbarHeight + 'px', width: contentWidth + 'px' }">
					<view class="navbar-search">
						<view class="navbar-search__icon"></view>
						<view class="navbar-search__text">搜索想要的皮肤</view>
					</view>
				</view>
			</view>
			<!-- navbar 占位元素，将内容撑开防止被 navbar 覆盖 -->
			<view :style="{ height: navbarHeight + 'px' }"></view>
		</view>
		<view v-for="item in 100">{{ item }}</view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { onLoad, onReady } from '@dcloudio/uni-app'

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
$navbar-height: 45px;

.container {
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
				height: $navbar-height;
				padding: 0 15px;
				box-sizing: border-box;

				.navbar-search {
					display: flex;
					align-items: center;
					width: 100%;
					height: 30px;
					background-color: #fff;
					border-radius: 30px;
					padding: 0 10px;

					&__icon {
						width: 10px;
						height: 10px;
						border: 1px red solid;
						margin-right: 10px;
					}

					&__text {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
}
</style>
