import {createStore} from 'redux';


//Reducers
// Reducers are pure functions meaning o/p depends only on the i/ps i.e params
// pure functions don't depend on any variable outside function
// never change state or action directly

const countReducer = (state = {count:0}, action)=>{

    switch(action.type){
        case 'INCREMENT':
        const incrementBy = action.incrementBy;
        return {
            count: state.count + incrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        case 'DECREMENT':
        const decrementBy = action.decrementBy;
        return {
            count: state.count - decrementBy
        };
        default: 
            return state
    }
};
const store = createStore(countReducer);

// Action generators
const incrementCount = ({incrementBy = 1}={})=>{
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
};
// Action generators
const decrementCount = ({decrementBy = 1} = {})=>{
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
};
// Action generators
const resetCount = ()=>{
    return {
        type: 'RESET',
    }
};


// store subscibe will tell us  everytime when the redux store changes
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

// Actions allow us to change redux store
// action is also an object that is sent to the store
// dispatching an action to redux store
store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 3}));
store.dispatch(decrementCount());
// this is how we unsubscribe
// from here we will not see any subscibe messeages
unsubscribe();


store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());

console.log("Final value:"+ store.getState().count);


