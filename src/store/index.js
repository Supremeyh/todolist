import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const enhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// Redux设计思想：Web 应用是一个状态机，视图与状态是一一对应的；所有的状态，保存在一个对象里面
const store = createStore(reducer, enhancer)


export default store