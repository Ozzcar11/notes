<script lang="ts" setup></script>

<template>
  <main class="main">
    <div class="main__wrapper container">
      <div class="main__container main__container--title">
        <h1 class="main__title">Мои заметки</h1>
        <h3 class="main__desc">Не забывай о важном, храни его в облаке.</h3>
      </div>
      <div class="main__container main__container--image">
        <img src="@/assets/images/main.svg" alt="Рука заполняющая заметки" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: calc(100vh - 136px);
  background-color: $dark;

  @include screen-desktop-xs {
    height: calc(100vh - 96px);
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 0px 80px;

    @include screen-desktop-xs {
      flex-direction: column;
      align-items: center;
      padding: 0px 40px;
    }

    @include screen-tablet {
      padding: 0px 20px;
    }
  }

  &__container {
    flex: 1 1 0;

    @include screen-desktop-xs {
      display: flex;
      justify-content: center;
    }

    &--title {
      display: flex;
      justify-content: center;
      flex-direction: column;
      max-width: 650px;

      @include screen-desktop-xs {
        align-items: center;
      }
    }

    &--image {
      max-width: 897px;
      max-height: 864px;
      overflow: hidden;
      flex-basis: 897px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        min-height: 200px;
      }
    }
  }

  &__title {
    font-weight: 900;
    margin-bottom: 40px;

    @include screen-desktop-xs {
      text-align: center;
      margin: 40px 0 20px;
    }

    @include screen-tablet {
      @include text-h1-mobile;
      max-width: 320px;
      margin: 20px 0 20px;
    }
  }

  &__desc {
    max-width: 400px;

    @include screen-desktop-xs {
      text-align: center;
      max-width: 600px;
    }

    @include screen-tablet {
      @include text-h3-mobile;
      max-width: 320px;
    }
  }
}
</style>
