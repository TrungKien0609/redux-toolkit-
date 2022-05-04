import  {createStore} from 'redux'
import rootReducer from './reducer'
// enhancer vao lam tham so thu 2
import { composeWithDevTools } from 'redux-devtools-extension';
// neu co  initialState thi createStore(rootReducer,initialState,composeWithDevTools)
const store = createStore(rootReducer,composeWithDevTools()) // (reducer,initialState,enhancer)
// enhancer la cac middleware(saga) neu khong co initialState co the truyen

export default store;