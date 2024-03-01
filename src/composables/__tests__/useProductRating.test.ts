import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import { useProductRating } from '../useProductRating';

describe('useProductRating', () => {
  it('returns "sehr gut" for ratings >= 90', () => {
    const rating = ref(95);
    const { gradeNumber, gradeText } = useProductRating(rating);
    expect(gradeNumber.value).toBe(1);
    expect(gradeText.value).toBe('sehr gut');
  });

  it('returns "gut" for ratings >= 70 and < 90', () => {
    const rating = ref(85);
    const { gradeNumber, gradeText } = useProductRating(rating);
    expect(gradeNumber.value).toBe(2);
    expect(gradeText.value).toBe('gut');
  });

  it('returns "befriedigend" for ratings >= 50 and < 70', () => {
    const rating = ref(65);
    const { gradeNumber, gradeText } = useProductRating(rating);
    expect(gradeNumber.value).toBe(3);
    expect(gradeText.value).toBe('befriedigend');
  });

  it('returns "ausreichend" for ratings >= 30 and < 50', () => {
    const rating = ref(45);
    const { gradeNumber, gradeText } = useProductRating(rating);
    expect(gradeNumber.value).toBe(4);
    expect(gradeText.value).toBe('ausreichend');
  });

  it('returns "mangelhaft" for ratings >= 20 and < 30', () => {
    const rating = ref(25);
    const { gradeNumber, gradeText } = useProductRating(rating);
    expect(gradeNumber.value).toBe(5);
    expect(gradeText.value).toBe('mangelhaft');
  });

  it('returns "ungenügend" for ratings < 20', () => {
    const rating = ref(15);
    const { gradeNumber, gradeText } = useProductRating(rating);
    expect(gradeNumber.value).toBe(6);
    expect(gradeText.value).toBe('ungenügend');
  });
});
