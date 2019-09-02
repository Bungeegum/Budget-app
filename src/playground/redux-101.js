import {createStore} from 'redux';

//action generator functions
const incrementCount= ({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy=1}={})=>({

    type:'DECREMENT',
    decrementBy
});

const resetCount=()=>({
    type:'RESET'
});

const setCount=({setTo}) =>({
    type:'setCount',
    setTo
});



const store = createStore((state  = {count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            
            return {
                count:state.count +action.incrementBy
            };
        case 'DECREMENT':
            
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count:action.count
            };
        case 'RESET':
            return{
                count:0
            };
        case 'setCount':
            return{
                count:action.setTo
            }
        default:
        return state;
    }
});

const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());
})

/*store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
*/
store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({setTo:101}));

