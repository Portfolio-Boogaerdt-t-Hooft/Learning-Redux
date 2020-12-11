import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import allReducers from './reducers'/* index.js hoef je niet te beschrijven. 
                      alleen de bovenliggende map  */
import { Provider } from 'react-redux'



const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);



// // STORE -> GLOBALIZED STATE

// // ACTION INCREMENT
// const increment = () => {
//   return { type: 'INCREMENT' }
// }

// const decrement = () => {
//   return { type: 'DECREMENT' }
// }

// // // REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//   }
// }
// let store = createStore(counter)

// // // display it in the console
// store.subscribe(() => console.log(store.getState()))


// // // DISPATCHED
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

