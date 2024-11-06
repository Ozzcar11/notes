<script lang="ts" setup>
import { UiButton } from "@/components/ui";
import { mainRoute } from "@/router/routes";
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <router-link :to="mainRoute">
        <img src="/icons/logo.svg" alt="Логотип" class="header__logo" />
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

  @include screen-desktop-xs {
    padding: 0px 40px;
  }

  @include screen-tablet {
    padding: 0px 20px;
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

  &__logo {
    @include screen-tablet {
      max-width: 154px;
      height: 36px;
    }
  }
}
</style>
