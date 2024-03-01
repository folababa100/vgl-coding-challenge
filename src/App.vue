<script setup lang="ts">
import ProductRatingBadge from '@/components/ProductRatingBadge.vue';
</script>

<template>
  <div class="flex">
    <ProductRatingBadge
      :rating="92"
      layoutType="blue"
      title="Vergleich.org"
      currentDate="03/2021"
    />
    <ProductRatingBadge
      :rating="92"
      layoutType="number"
      title="AUSZEICHNUNG"
      currentDate="02/2021"
    />
    <ProductRatingBadge
      :rating="70"
      layoutType="red"
      title="AUSZEICHNUNG"
      currentDate="02/2021"
    />
  </div>
</template>
