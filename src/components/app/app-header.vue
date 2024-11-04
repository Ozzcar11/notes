<script lang="ts" setup>
import { UiButton } from "@/components/ui";
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <router-link :to="{ name: 'main' }">
        <img src="/icons/logo.svg" />
      </router-link>
      <ui-button prefix-icon="mdi-location-enter">Вход</ui-button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $dark;
  padding: 0px 80px;

  @include screen-tablet {
    padding: 0px 40px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 40px 0px;

    @include screen-desktop-xs {
      padding: 20px 0px;
    }
  }
}
</style>
