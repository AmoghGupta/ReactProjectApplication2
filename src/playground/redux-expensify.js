import {createStore, combineReducers} from  'redux';
import uuid from 'uuid';

// default states
const expenseReducerDefaultState = [];
const filtersReducerDefaultState = {
        text: 'rent',
        sortBy: 'amount',
        startDate : undefined,
        endDate: undefined
};

//EXPENSES REDUCER
const expensesReducer = (state = expenseReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            var newArray = state.slice();
            var index = state.indexOf(action.id)
        return newArray.splice(index, 1);
        default:
        return state;
    }
};
// FILTER REDUCER
const filtersReducer = (state = filtersReducerDefaultState,action)=>{
    switch(action.type){
        default:
        return state;
    }
};


// store containes reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    console.log(store.getState());
})



//ADD_EXPENSE
const addExpense = ({description='',note='',amount=0,createdAt=0}={})=>{
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}
//action generator
// dispatcher has event type and action
const expenseOne =store.dispatch(addExpense({
        id: 'my 1st expense',
        description: 'Today',
        note: 'this was the first expense done',
        amount: 2900,
        createdAt: 0
}));

const expenseTwo =store.dispatch(addExpense({
    id: 'my 2nd expense',
    description: '2nd',
    note: 'this was the 2nd expense done',
    amount: 200,
    createdAt: 0
}));



//ADD_EXPENSE
const removeExpense = ({id=''}={})=>{
    return {
        type: 'REMOVE_EXPENSE',
        id: {
            id
        }
    }
}

//REMOVE_EXPENSE ACTION
store.dispatch(removeExpense({
    id: expenseOne.expense.id
}));


//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT_
//SET_START_DATE
//SET_END_DATE

