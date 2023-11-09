<template>
  <main class="card">
    <section class="expense-total">
      <article><b>Total</b></article>
      <article>{{ $props.value }}</article>
    </section>
  </main>
</template>

<script setup lang="ts">
type TProps = {
  value: number;
}

defineProps<TProps>();
</script>

<style scoped>
.expense-total {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
</style>
