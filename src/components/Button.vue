<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
  type: {
    type: String as () => 'primary' | 'secondary' ,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => [
  'review__button',
  `review__button--${props.type}`,
  {'review__button--disabled': props.disabled},
]);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<template>
  <button
      :class="buttonClasses"
      :disabled="disabled"
      @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.review__button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.review__button--primary {
  background-color: #007bff;
  color: white;
}

.review__button--secondary {
  background-color: #6c757d;
  color: white;
}
</style>
