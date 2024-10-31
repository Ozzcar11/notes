<script lang="ts" setup>
import { UiInput, UiButton } from "@/components/ui";
import {
  type AuthFormProps,
  type AuthFormEmits,
  AuthFormDefaultProps,
} from "../types";

const props = withDefaults(defineProps<AuthFormProps>(), AuthFormDefaultProps);
const loginInput = defineModel<string | number | null>("loginInput", {
  default: null,
});
const passwordInput = defineModel<string | number | null>("passwordInput", {
  default: null,
});
const repeatPasswordInput = defineModel<string | number | null>(
  "repeatPasswordInput",
  {
    default: null,
  }
);

defineEmits<AuthFormEmits>();
</script>

<template>
  <form class="auth">
    <div>
      <slot v-if="$slots.title" name="title" />
      <div v-else class="auth__title">{{ props.title }}</div>
      <ui-input
        v-model="loginInput"
        class="auth__input"
        label="Логин"
        clearable
      />
      <ui-input
        v-model="passwordInput"
        class="auth__input"
        label="Пароль"
        type="password"
        clearable
      />
      <ui-input
        v-if="props.repeatPassword === true"
        v-model="repeatPasswordInput"
        class="auth__input"
        label="Повторите пароль"
        type="password"
        clearable
      />
      <slot name="fields" />
    </div>
    <div>
      <ui-button class="auth__button" @click="$emit('submit')" size="large">
        {{ props.submitText }}
      </ui-button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &__title {
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    margin: 25px 0 35px;
  }

  &__input {
    & + & {
      margin-top: 8px;
    }
  }

  &__button {
    margin-top: 45px;
    width: 100%;
  }
}
</style>
