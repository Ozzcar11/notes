<script lang="ts" setup>
defineOptions({
  name: "EmptyLayout",
});
</script>

<template>
  <div class="empty">
    <div class="empty__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
