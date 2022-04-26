import  {createStore} from 'redux'
import rootReducer from './reducer'
const store = createStore(rootReducer) // (reducer,initialState,enhancer)
// enhancer la cac middleware(saga) neu khong co initialState co the truyen
// enhancer vao lam tham so thu 2
export default store;