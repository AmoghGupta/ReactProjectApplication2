import {createStore, combineReducers} from  'redux';
import uuid from 'uuid';

// Concept
//Store for storing state of components
//Store has Reducers
//Reducer has action and state, based on action, state is modified
//Action dispatcher dispatches an action, based on which the reducer in the store is executed 
// and the state is modified  


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
           return state.filter(({id})=> id!== action.id)
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id == action.expense.id){
                return {
                    ...expense,
                    ...action.expense
                }
            }else{
                return expense
            }
        })
        default:
        return state;
    }
};
// FILTER REDUCER
const filtersReducer = (state = filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.filterValue
        } ;
        case 'SORT_BY_DATE':
        return{
            ...state,
            sortBy:action.sortByValue
        }
        case 'SORT_BY_AMOUNT':
        return{
            ...state,
            sortBy:action.sortByValue
        }
        case 'SET_START_DATE':
        return{
            ...state,
            startDate:action.setStartDate
        }
        case 'SET_END_DATE':
        return{
            ...state,
            endDate:action.setEndDate
        }
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
const removeExpense = ({id}={})=>{
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

//REMOVE_EXPENSE ACTION
store.dispatch(removeExpense({
    id: expenseOne.expense.id
}));


//EDIT EXPENSE
const editExpense = (expense)=>{
    return{
        type: 'EDIT_EXPENSE',
        expense: {
            ...expense,
            note: 'this was the second edited/updated expense',
            amount: 500,
        }
    }
}

//EDIT_EXPENSE
store.dispatch(editExpense(expenseTwo.expense));


const setTextFilter = (filterValue='')=>{
    return{
        type: 'SET_TEXT_FILTER',
        filterValue: filterValue
    }
}


//SET_TEXT_FILTER
store.dispatch(setTextFilter('rent12'));
store.dispatch(setTextFilter(''));


const sortByDate = (sortByValue='')=>{
    return{
        type: 'SORT_BY_DATE',
        sortByValue: sortByValue
    }
}
//SORT_BY_DATE
store.dispatch(sortByDate('date'));

const sortByAmount= (sortByValue='')=>{
    return{
        type: 'SORT_BY_AMOUNT',
        sortByValue: sortByValue
    }
}
//SORT_BY_AMOUNT
store.dispatch(sortByAmount('amount'));


const setStartDate= (setStartDate)=>{
    return{
        type: 'SET_START_DATE',
        setStartDate: setStartDate
    }
}

//SET_START_DATE
store.dispatch(setStartDate(125));

store.dispatch(setStartDate());


const setEndDate= (setEndDate)=>{
    return{
        type: 'SET_END_DATE',
        setEndDate: setEndDate
    }
}

//SET_END_DATE
store.dispatch(setEndDate(1250));

