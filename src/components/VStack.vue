<script lang="ts" setup>
  defineProps<{
    center?: boolean;
    space?: number;
  }>();
</script>

<template>
  <div :class="{ center }" class="stack" :style="{ gap: `${space ?? 0.5}em` }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .stack {
    display: flex;
    flex-direction: column;

    &.center > :deep(*) {
      text-align: center;
    }

    &.stack > :deep(*) {
      margin: 0;
    }
  }
</style>
