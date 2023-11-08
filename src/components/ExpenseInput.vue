<template>
  <main class="form">
    <section class="field">
      <input v-model="state.name" placeholder="Name" type="text" @blur="$v.name.$touch()">
      <div class="input-errors" v-for="error of $v.name.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </section>

    <div class="row">
      <select v-model="state.type">
        <option value="in">In</option>
        <option value="out">Out</option>
      </select>

      <section class="field">
        <input v-model="state.value" placeholder="Value" type="number" @blur="$v.value.$touch()">
        
        <div class="input-errors" v-for="error of $v.value.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </section>
    </div>
    
    <button :disabled="$v.$invalid" @click="onSubmit">Ok</button>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { required, numeric, minValue } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import type { TExpense } from '@/types/expense.type';

type TEmits = {
  (e: 'submit', payload: TExpense): void
};

const emit = defineEmits<TEmits>();

const state = reactive<TExpense>({
  name: '',
  type: 'in',
  value: 0,
});

const rules = {
  name: { required },
  type: { required },
  value: { required, numeric, minValue: minValue(1) }
}

const $v = useVuelidate(rules, state)

const onSubmit = () => emit('submit', state);

</script>

<style scoped>
.form {
  width: 100%;
  margin-bottom: 16px;
}

.field, button {
  width: 100%;
}
.field > input {
  width: 100%;
}

.field > input, select {
  padding: 8px;
  margin-bottom: 6px;
}

.row {
  display: flex;
  gap: 6px;
}
</style>