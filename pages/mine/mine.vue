<template>
	<view>
		<h3>My Profile</h3>
	</view>
</template>

<script setup lang="ts">
	import { onLoad, onTabItemTap } from '@dcloudio/uni-app'
	
	// 作为 tabBar 页面会被缓存，所以此方法只会页面首次加载时调用，菜单切换时不会调用
	onLoad(() => {
		console.log('onLoad: mine')
	})
	
	// 每次切换到当前页面会调用
	onTabItemTap(() => {
		console.log('onTabItemTap')
	})
</script>

<style lang="scss">

</style>
