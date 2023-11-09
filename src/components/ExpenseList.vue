<template>
  <main class="expense-list card">
    <template v-if="$props.items && $props.items.length > 0">
      <table class="expense-table">
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th></th>
        </tr>
        <tr v-for="item in $props.items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ (item.type === 'out' && '-') || '' }} {{ item.value }}</td>
          <td>
            <button class="danger full-width" @click="$emit('delete', item.id)">Delete</button>
          </td>
        </tr>
      </table>
    </template>

    <template v-else> No expenses to track! </template>
  </main>
</template>

<script setup lang="ts">
import type { TExpenseItem } from '@/types/expense.type'

type TEmits = {
  (e: 'delete', id: string): void
}

type TProps = {
  items: TExpenseItem[]
}

defineEmits<TEmits>()

defineProps<TProps>()
</script>

<style scoped>
.expense-list {
  margin-bottom: 16px;
}
</style>
