<script lang="ts" setup>
import AppHeader from "@/components/app/app-header.vue";

defineOptions({
  name: "MainLayout",
});
</script>

<template>
  <div>
    <app-header />
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
