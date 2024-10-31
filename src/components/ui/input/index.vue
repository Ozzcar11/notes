<script setup lang="ts">
import { computed, defineModel, ref } from "vue";
import { useBEMNamespace } from "@/composables/useBEMNamespace";
import { type InputProps, InputPropsDefaults } from "./types";
import { UiIcon } from "@/components/ui/icon";

const props = withDefaults(defineProps<InputProps>(), InputPropsDefaults);

const modelValue = defineModel<string | number | null>("modelValue", {
  default: "",
});

const ns = useBEMNamespace("ui-input");

const input = ref<HTMLInputElement>();
const typeValue = ref("text");

const inputClasses = computed(() => [
  ns.block(),
  ns.modifier(props.size),
  ns.is("disabled", props.disabled),
]);

const showButtons = computed(() => props.type === "password");

function focusInput() {
  input.value?.focus();
}

function clear() {
  if (props.disabled) return;

  modelValue.value = "";
}

function showPassword() {
  typeValue.value = typeValue.value === "password" ? "text" : "password";
}
</script>

<template>
  <div :class="inputClasses">
    <div v-if="label !== ''" class="ui-input__label">
      {{ label }}
    </div>
    <div tabindex="-1" class="ui-input__wrapper" @click="focusInput">
      <input
        ref="input"
        class="ui-input__input"
        :disabled="disabled"
        :type="typeValue"
        :placeholder="placeholder"
      />
      <Transition name="slide-fade">
        <div v-if="showButtons" class="ui-input__btn">
          <ui-icon
            v-if="type === 'password'"
            :icon="
              typeValue === 'password'
                ? 'mdi-eye-outline'
                : 'mdi-eye-off-outline'
            "
            class="pointer"
            @click="showPassword"
          />
          <ui-icon
            v-if="clearable"
            icon="mdi-close"
            class="ui-input__btn-close"
            @click="clear"
          />
        </div>
      </Transition>
    </div>
    <!-- <div
      v-if="hint !== '' || haveErrors"
      class="ui-input__hint"
      :class="{ 'ui-input__hint--error': haveErrors }"
    >
      {{ haveErrors ? errorMessages?.[0] : hint }}
    </div> -->
  </div>
</template>

<style lang="scss">
.ui-input {
  width: 100%;

  &__wrapper {
    position: relative;
    display: flex;
    width: 100%;
    color: $text-primary;
    line-height: 24px;
    background-color: $surface-white;
    border: 1.5px solid $surface-gray;
    border-radius: 5px;
    outline: none;
    overflow: hidden;

    &:hover {
      color: $text-primary;
      border: 1.5px solid $surface-black;
    }

    &:focus-within {
      border: 1.5px solid $surface-black;
    }

    .ui-input--medium & {
      padding: 7px 12px;
    }

    .ui-input--large & {
      padding: 11px 16px;
    }

    .ui-input--password & {
      padding-right: 36px;
    }

    .ui-input--clearable & {
      padding-right: 36px;
    }

    .ui-input--error & {
      border: 1.5px solid $service-error;
    }

    .ui-input--clearable.ui-input--password {
      padding-right: 68px;
    }
  }

  &__input {
    &::placeholder {
      color: $surface-gray;
    }
  }

  &__label {
    color: $text-secondary;
    font-size: 0.875rem;
    margin-bottom: 8px;

    @include text-sm;
  }

  &__hint {
    color: $text-secondary;
    font-size: 0.875rem;
    margin-top: 8px;

    @include text-sm;

    &--error {
      color: $service-error;
    }
  }

  &__prefix-icon {
    margin-right: 10px;
    width: 22px;
    height: 22px;

    svg {
      fill: $surface-gray;
    }
  }

  &__btn {
    color: $text-secondary;
    position: absolute;
    right: 10px;
    display: inline-flex;

    &-close {
      margin-left: 6px;
      cursor: pointer;
    }
  }

  input {
    outline: none;
    width: 100%;
    border: none;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
}
</style>
