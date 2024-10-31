<script lang="ts" setup>
defineOptions({
  name: "AuthLayout",
});
</script>

<template>
  <div class="empty">
    <div class="empty__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: $surface-black;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    height: 400px;
    padding: 15px;
    background-color: $surface-white;
    border-radius: 15px;
  }
}
</style>
