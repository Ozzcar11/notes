<script setup lang="ts">
import { computed, useSlots } from "vue";
import { useRouter } from "vue-router";
import {
  type ButtonEmits,
  type ButtonProps,
  ButtonPropsDefaults,
} from "./types";
import { useBEMNamespace } from "@/composables/useBEMNamespace";

import { UiIcon } from "@/components/ui/icon";

const props = withDefaults(defineProps<ButtonProps>(), ButtonPropsDefaults);

const emit = defineEmits<ButtonEmits>();

const ns = useBEMNamespace("ui-button");
const slots = useSlots();
const router = useRouter();

const buttonClasses = computed(() => [
  ns.block(),
  ns.modifier(props.color),
  ns.modifier(props.size),
  !hasSlot.value ? ns.modifier("empty") : ns.modifier("not-empty"),
]);

const hasSlot = computed(() => {
  return !!slots.default;
});

function buttonClickHandler(event: Event) {
  emit("click", event);

  if (props.to !== "") void router.push(props.to);
}
</script>

<template>
  <button
    type="button"
    :class="buttonClasses"
    :disabled="disabled"
    @click="buttonClickHandler"
  >
    <ui-icon
      v-if="prefixIcon !== ''"
      :icon="prefixIcon"
      :class="{ 'ui-button__prefix-icon': !hasSlot }"
    />
    <slot />
    <ui-icon
      v-if="postfixIcon !== ''"
      :icon="postfixIcon"
      :class="{ 'ui-button__postfix-icon': !hasSlot }"
    />
  </button>
</template>

<style lang="scss">
.ui-button {
  width: auto;
  max-width: 100%;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &__postfix-icon {
    width: 24px;
    height: 24px;
  }

  &__prefix-icon {
    width: 24px;
    height: 24px;
  }

  &--primary {
    color: $text-primary-inverted;
    background-color: $surface-accent;

    &:hover {
      background-color: $surface-accent-dark-s;
    }

    &:active {
      background-color: var(--surface-accent-dark-m);
    }
  }

  &--secondary {
    color: var(--surface-accent);
    background-color: var(--surface-gray-light-s);

    &:hover {
      background-color: var(--surface-accent-light-m);
    }

    &:active {
      background-color: var(--surface-accent-light-xl);
    }
  }

  &--light {
    color: var(--text-primary);
    background-color: var(--surface-light);
    box-shadow: 0 4px 16px 0 rgba(5, 25, 69, 0.04);

    &:hover {
      background-color: var(--surface-gray-light-m);
    }

    &:active {
      background-color: var(--surface-gray);
    }
  }

  &--error {
    color: var(--service-error, #e3000f);
    background: var(--service-error-light, #f6e9ed);

    &:hover {
      background: var(--service-error-error-light-m, #fddae5);
    }

    &:active {
      background: var(--service-error-error-light-l, #fcc4d6);
    }
  }

  &--large {
    padding: 12px 20px;
    height: 48px;

    &.ui-button--empty {
      padding: 12px;
    }
  }

  &--medium {
    padding: 8px 20px;

    &.ui-button--empty {
      padding: 8px;
    }
  }

  &--blue {
    color: var(--text-accent);
    box-shadow: none;
  }

  &:focus {
    border-color: none;
  }

  &:disabled,
  &[disabled] {
    color: var(--text-secondary);
    background-color: var(--surface-gray-light-m);
  }
}
</style>
