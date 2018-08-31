import {createStore} from 'redux';


const store = createStore((state = {count:0}, action)=>{

    switch(action.type){
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy==='number'?action.incrementBy:1;
        return {
            count: state.count + incrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy==='number'?action.decrementBy:1;
        return {
            count: state.count - decrementBy
        };
        default: 
            return state
    }
}); 

console.log(store.getState());

// store subscibe will tell us  everytime when the redux store changes

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

// Actions allow us to change redux store
// action is also an object that is sent to the store

// dispatching an action to redux store
store.dispatch(
    {
        type: 'INCREMENT',
        incrementBy: 5
    }
);
store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy: 3
    }
);
// this is how we unsubscribe
// from here we will not see any subscibe messeages
unsubscribe();


store.dispatch(
    {
        type: 'INCREMENT'
    }
);
store.dispatch(
    {
        type: 'INCREMENT'
    }
);
store.dispatch(
    {
        type: 'RESET'
    }
);
store.dispatch(
    {
        type: 'DECREMENT'
    }
);

console.log("Final value:"+ store.getState().count);


