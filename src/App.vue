<template>
  <main class="app">
    <expense-input @submit="addExpense" />
    <expense-list :items="expenses" @delete="deleteExpense" />
    <expense-total :value="total" />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ExpenseInput from './components/ExpenseInput.vue'
import ExpenseList from './components/ExpenseList.vue'
import ExpenseTotal from './components/ExpenseTotal.vue'
import type { TExpense, TExpenseItem } from './types/expense.type'
import { v4 as uuidv4 } from 'uuid'

const expenses = ref<TExpenseItem[]>([])

const total = computed(() => {
  const initialTotal = { inExpensesTotal: 0, outExpensesTotal: 0 };

  const { inExpensesTotal, outExpensesTotal } = expenses.value.reduce((acc, currentItem) => {
    if (currentItem.type === 'in') {
      acc.inExpensesTotal += currentItem.value;
    } else if (currentItem.type === 'out') {
      acc.outExpensesTotal += currentItem.value;
    }

    return acc;
  }, initialTotal);

  return inExpensesTotal - outExpensesTotal;
});

const addExpense = (expense: TExpense) => {
  expenses.value.push({ id: uuidv4(), ...expense })
}

const deleteExpense = (id: string) => {
  const index = expenses.value.findIndex(({ id: itemId }) => id === itemId)

  if (index !== -1) {
    expenses.value.splice(index, 1)
  }
}
</script>

<style>
.app {
  margin: auto;
  width: 600px;
}
</style>
