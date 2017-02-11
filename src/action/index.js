// redux에서 action은 자바스크립트 객체로 어떤 형태의 액션이 실행되는지 나타내는 type 속성을 무조건 하나 가져야 한다. 타입은 일반적으로 문자열 상수로 정의한다.
// action은 애플리케이션에서 스토어로 보내는 데이터 묶음. 이들은 유일한 정보원이고, store.dispatch()를 통해 이들을 보낼 수 있다.
// action은 
// 1. 하나의 plain Javascript Object로 만들어야한다.
// 2. 하나의 type을 가져야한다.
// 3. 옵션으로 payload 속성를 가진다. 일반적인 데이터를 나타냅니다.
// 4. 옵션으로 error 속성을 가진다. 만약 action에서 에러가 발생할 경우 true가 된다.
// 5. 옵션으로 meta 속성을 가진다. payload 데이터를 제외한 데이터로 구성됩니다. 

const ADD_TODO = 'ADD_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const TOGGLE_TODO = 'TOGGLE_TODO';

let todoIndex = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    payload: {
        id: todoIndex++,
        text: text
    }
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

