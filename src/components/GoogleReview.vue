<script setup lang="ts">
import Button from "./Button.vue";
import {useI18n} from "vue-i18n";

interface ReviewProps {
  id: string;
  city: string;
  rating: string;
  review: string;
}

const {city, rating, review} = defineProps<ReviewProps>();
const {t} = useI18n()

const emit = defineEmits<{
  (e: "open-modal", city: string, rating: string, review: string): void;
}>();

const redirectToGoogle = () => {
  window.location.href = "https://www.google.com";
};

const toggleModal = () => {
  emit("open-modal", city, rating, review);
};
</script>

<template>
  <li class="review">
    <div class="review__header-stars">
      <div class="review__header">
        <img
            class="review__icon"
            src="../assets/images/icons/google.svg"
            alt="google"
            width="40"
            height="40"
        />
        <h4 class="review__title">{{ t('googleReview.title') }}</h4>
      </div>
      <div class="review__stars">
        <span class="review__rating">{{ rating }}</span>
        <p class="review__stars-list">
          <span
              v-for="star in 5"
              :key="star"
              class="review__star"
              :class="{ 'review__star--filled': star <= Number(rating) }"
          >★</span>
        </p>
        <p class="review__answers">{{ review }} {{ t('googleReview.review') }}</p>
      </div>
    </div>
    <div class="review__actions">
      <Button
          :label="t('googleReview.buttonView')"
          type="primary"
          :onClick="redirectToGoogle"
      />
      <Button
          :label="t('googleReview.buttonModal')"
          type="secondary"
          :onClick="toggleModal"
      />
    </div>
  </li>
</template>

<style scoped lang="scss">
.review {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px #0000000d;

  &__header-stars {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__icon {
    width: 40px;
    height: 40px;
  }

  &__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
  }

  &__stars {
    display: flex;
    flex-direction: column;

    &-list {
      display: flex;
      gap: 5px;
    }
  }

  &__rating {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  &__star {
    font-size: 24px;
    color: #ccc;
    padding-bottom: 5px;

    &--filled {
      color: #f39c12;
    }
  }

  &__answers {
    color: #798595;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
  }

  &__actions {
    display: flex;
    gap: 10px;

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

      &--primary {
        background: linear-gradient(90deg, #e6f7f5 0%, #f8fcfc 100%);
        color: #000;
        border: 1px solid transparent;
      }

      &--secondary {
        background: linear-gradient(90.66deg, #3cb9a0 0.57%, #1786ac 99.43%);
        color: #fff;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (min-width: 577px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &__stars {
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

  }
  @media (min-width: 1200px) {
    &__header {
      margin-right: 50px;
    }
    &__header-stars {
      flex-direction: row;
    }
    &__actions {
      .review__button {
        padding: 10px 20px;
      }
    }
  }
  @media (min-width: 1367px) {
    &__header {
      margin-right: 60px;
    }
  }
}
</style>

