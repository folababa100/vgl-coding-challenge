<template>
  <div :class="`badge badge--${layoutType}`">
    <div class="badge-header">
      <span>{{ title }}</span>
    </div>
    <div class="badge-layout">
      <div class="badge-content">
        <p class="badge-title">Unsere Bewertung</p>
        <template v-if="layoutType === 'blue' || layoutType === 'red'">
          <span class="badge-text">{{ gradeText }}</span>
        </template>
        <template v-else>
          <p class="badge-grade-number">{{ gradeNumber }}</p>
          <p class="badge-grade-text">{{ gradeText }}</p>
        </template>
      </div>
    </div>
    <span class="badge-footer"> {{ currentDate }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useProductRating } from '../composables/useProductRating';

export default defineComponent({
  name: 'ProductRatingBadge',
  props: {
    rating: {
      type: Number,
      required: true,
    },
    layoutType: {
      type: String,
      required: true,
      validator: (value: string) => ['blue', 'red', 'number'].includes(value),
    },
    title: {
      type: String,
      required: true,
    },
    currentDate: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { rating } = toRefs(props);
    const { gradeNumber, gradeText } = useProductRating(rating);

    return { gradeNumber, gradeText };
  },
});
</script>

<style scoped lang="scss">
/* General styles for badge */
.badge {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: fit-content;
  cursor: pointer;
}

.badge-title {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: #000;
  text-align: center;
  margin: 0;
}

/* Specific styles for the red badge */
.badge--red {
  color: white;
  border-color: red;
}

.badge--red {
  border: 2px solid red;
  .badge-header {
    background-color: red;
    color: white;
    width: 100%;
    text-align: center;
  }

  .badge-layout {
    padding: 2rem 0.5rem;

    .badge-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: red;
      text-transform: uppercase;
    }
  }
}

/* Specific styles for the blue badge */
.badge--blue {
  border: 2px solid #0298d5;
  .badge-header {
    background-color: #0298d5;
    color: white;
    width: 100%;
    text-align: center;
  }

  .badge-layout {
    padding: 2rem 0.5rem;

    .badge-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: #0298d5;
      text-transform: uppercase;
    }
  }
}

.badge--number {
  border: 2px solid #0298d5;
  .badge-header {
    background-color: #0298d5;
    color: white;
    width: 100%;
    text-align: center;
  }

  .badge-layout {
    padding: 0.5rem;

    .badge-grade {
      &-number {
        font-size: 2rem;
        font-weight: bold;
        color: #0298d5;
        margin: 0.5rem 0;
      }

      &-text {
        font-size: 1rem;
        color: black;
        margin: 0;
      }
    }
  }
}

.badge-footer {
  background-color: #ddd;
  color: black;
  width: 100%;
  text-align: center;
}
</style>
