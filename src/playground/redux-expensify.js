import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'bleskfhlkw',
        description: 'Uber',
        note: 'Uber to the office',
        amount: 54500, // in pennies
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};


