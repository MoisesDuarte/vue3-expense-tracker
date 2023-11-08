export type TExpense = {
  name: string;
  type: 'in' | 'out';
  value: number;
}

export type TExpenseItem = TExpense & { id: string; };
