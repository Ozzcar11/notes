<script lang="ts" setup>
import { RouterLink } from "vue-router";
import AuthForm from "@/modules/auth/components/auth-form.vue";
</script>

<template>
  <div class="login">
    <auth-form title="Авторизация" submit-text="Войти">
      <template #fields>
        <div class="login__link">
          Нет аккаунта?
          <router-link to="/register">Зарегистрироваться</router-link>
        </div>
      </template>
    </auth-form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;

  &__link {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
