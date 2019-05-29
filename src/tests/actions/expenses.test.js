import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'Example', note:'Some note', amount: 1, createdAt: 0 });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Example',
            note:'Some note',
            amount: 1,
            createdAt: 0
        }
    });
});

test('should use provided values in add expense action object', () => {
    const expenseData = { description: 'Example', note:'Some note', amount: 1, createdAt: 0 };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should use default values in add expense action object', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note:'',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
