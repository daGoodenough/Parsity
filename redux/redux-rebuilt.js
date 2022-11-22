const createStore = (reducer) => {
  let state;

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
  }

  dispatch({});

  return { getState, dispatch };
}


const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      debugger;
      return state += 1;
    case 'DECREMENT':
      debugger;
      return state -+ 1;
    case 'RESET':
      debugger;
      return state = 0;
    default:
      return state;
  }
}

const store = createStore(counter);

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'DECRNT'})
store.dispatch({type: 'RESET'})




console.log(store.getState());
