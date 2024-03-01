import { computed, Ref } from 'vue';

interface UseProductRatingReturn {
  gradeNumber: Ref<number>;
  gradeText: Ref<string>;
}

export function useProductRating(rating: Ref<number>): UseProductRatingReturn {
  const gradeNumber = computed(() => {
    if (rating.value >= 90) return 1;
    else if (rating.value >= 70) return 2;
    else if (rating.value >= 50) return 3;
    else if (rating.value >= 30) return 4;
    else if (rating.value >= 20) return 5;
    else return 6;
  });

  const gradeText = computed(() => {
    switch (gradeNumber.value) {
      case 1:
        return 'sehr gut';
      case 2:
        return 'gut';
      case 3:
        return 'befriedigend';
      case 4:
        return 'ausreichend';
      case 5:
        return 'mangelhaft';
      case 6:
        return 'ungenügend';
      default:
        return '';
    }
  });

  return { gradeNumber, gradeText };
}
