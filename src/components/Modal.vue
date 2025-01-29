<script setup lang="ts">
import {useI18n} from "vue-i18n";
import Button from "./Button.vue";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  rating?: string;
  review?: string;
}

const {title, rating, review, isOpen} = defineProps<ModalProps>();

const {t} = useI18n()

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div v-if="isOpen" class="modal" @click.self="closeModal">
    <div class="modal__content">
      <h4 class="modal__title">{{ t('modal.city') }}: {{ title }}</h4>
      <div class="modal__details">
        <p><strong>{{ t('modal.rating') }}:</strong> {{ rating }}</p>
        <p><strong>{{ t('modal.reviews') }}</strong> {{ review }}</p>
      </div>
      <Button class="review__button primary" @click="closeModal">
        {{ t('modal.buttonClose') }}
      </Button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
}

.modal__title {
  margin: 0 0 10px;
}

.modal__details p {
  margin: 10px 0;
}

.review__button {
  min-width: 110px;
  height: 36px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.primary {
  background: linear-gradient(90.66deg, #3cb9a0 0.57%, #1786ac 99.43%);
  color: #fff;
}
</style>
