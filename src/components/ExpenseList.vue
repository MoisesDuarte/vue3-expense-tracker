<template>
  <template v-if="$props.items && $props.items.length > 0">
    <table class="expense-table">
      <tr>
        <th>Name</th>
        <th>Value</th>
        <th></th>
      </tr>
      <tr v-for="item in $props.items" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.type === 'out' && '-' || '' }} {{ item.value }}</td>
        <td>
          <button @click="$emit('delete', item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </template>

  <template v-else>
    No expenses to track!
  </template>
</template>

<script setup lang="ts">
import type { TExpenseItem } from '@/types/expense.type';

type TEmits = {
  (e: 'delete', id: string): void
}

type TProps = {
  items: TExpenseItem[]
}

defineEmits<TEmits>()

defineProps<TProps>();
</script>

<style scoped>
.expense-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}

.expense-table > tr > th, td {
  width: 33.33%;
  border: 1px solid black;
  text-align: center;
}

.expense-table > tr > td > button {
  width: 100%;
}
</style>