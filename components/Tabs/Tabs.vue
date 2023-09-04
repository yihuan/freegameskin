<template>
  <view class="tabs">
    <scroll-view class="tabs-scroll" scroll-x>
      <view class="tabs-scroll__box">
        <view class="tabs-scroll__item" v-for="t in tabs" :key="t.value">{{ t.label }}</view>
      </view>
    </scroll-view>
    <view class="tabs-icons">
      <uni-icons type="gear" size="26" color="#666"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
import { Tab } from '@/types/ui'

interface TabsProps {
  tabs: Tab[]
}

defineProps<TabsProps>()
</script>

<style lang="scss">
.tabs {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
  box-sizing: border-box;

  &-scroll {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;

    &__box {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      height: 45px;
      box-sizing: border-box;

      .tabs-scroll__item {
        flex-shrink: 0;
        padding: 0 10px;
        color: #333;
        font-size: 14px;
      }
    }
  }

  &-icons {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;

    &::after {
      content: "";
      position: absolute;
      top: 12px;
      bottom: 12px;
      left: 0;
      width: 1px;
      background-color: #ddd;
    }
  }
}
</style>
