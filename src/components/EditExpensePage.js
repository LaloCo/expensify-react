import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => (
    <div>
        <h2>Editing expense</h2>
        <ExpenseForm expense={props.expense}
                     onSubmit={(expense) => {
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push('/');
        }}/>
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }));
            props.history.push('/');
        }}>Delete</button>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((e) => e.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpensePage);
