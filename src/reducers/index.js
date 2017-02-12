// 여러 개의 Reducer를 생성할 경우에 combineReducers를 이용해서 합칠 수 있다.


import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos, visibilityFilter
});

export default todoApp;