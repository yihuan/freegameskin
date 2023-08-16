<template>
	<view class="container" :class="className" @click="handleOpen">
		<h2>{{ title }}</h2>
		<!-- #ifdef APP-PLUS -->
		<MyBtn></MyBtn>
		<!-- #endif -->
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { onLoad, onReady } from '@dcloudio/uni-app'
import MyBtn from '@/components/my-btn/my-btn.vue'

const title: Ref<string> = ref('a')
const className: Ref<string> = ref('active')

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
@import './index.scss';

.container {
	padding: 20px;
	font-size: 14px;
	line-height: 24px;
}
</style>
