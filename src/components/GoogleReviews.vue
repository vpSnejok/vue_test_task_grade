<script setup lang="ts">
import { ref, onMounted } from "vue";
import Modal from "./Modal.vue";
import GoogleReview from "./GoogleReview.vue";
import {useI18n} from "vue-i18n";

interface Film {
  id: string;
  city: string;
  rating: string;
  review: string;
}

const films = ref<Film[]>([]);
const isLoading = ref<boolean>(true);
const isModalOpen = ref<boolean>(false);
const selectedCity = ref<string>("");
const selectedRating = ref<string>("");
const selectedReview = ref<string>("");

const {t} = useI18n()

const fetchFilms = async () => {
  try {
    isLoading.value = true;
    const response = await fetch("https://67957a8aaad755a134ec129e.mockapi.io/api/review/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Film[] = await response.json();
    films.value = data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  } finally {
    isLoading.value = false;
  }
};

const toggleModal = (city: string, rating: string, review: string) => {
  selectedCity.value = city;
  selectedRating.value = rating;
  selectedReview.value = review;
  isModalOpen.value = !isModalOpen.value;
};

onMounted(() => {
  fetchFilms();
});
</script>

<template>
  <div>
    <div v-if="isLoading" class="loader">
      <span>{{ t('googleReviews.loading')}}</span>
    </div>

    <ul v-else class="list">
      <GoogleReview
          v-for="data in films"
          :key="data.id"
          :id="data.id"
          :city="data.city"
          :rating="data.rating"
          :review="data.review"
          @open-modal="toggleModal"
      />
    </ul>

    <Modal
        v-if="isModalOpen"
        :isOpen="isModalOpen"
        :title="selectedCity"
        :rating="selectedRating"
        :review="selectedReview"
        @close="isModalOpen = false"
    />
  </div>
</template>

<style lang="scss" scoped>
.list {
  list-style: none;
  padding: 40px 16px;

  @media (min-width: 1367px) {
    padding: 40px 150px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #555;
}
</style>