<script setup lang="ts">
import {defineProps} from "vue";

interface ButtonProps {
  label: string;
  type: "primary" | "secondary";
  onClick?: (event: MouseEvent) => void;
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <button
      class="review__button"
      :class="{
      'review__button--primary': props.type === 'primary',
      'review__button--secondary': props.type === 'secondary',
    }"
      @click="props.onClick"
  >
    {{ props.label }}
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
