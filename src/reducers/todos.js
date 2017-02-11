// Reducer
// Action은 무엇인가 일어난다는 사실을 기술하지만, 애플리케이션의 상태가 어떻게 바뀌는지는 Reducer에서 하는 역할입니다.
// Redux에서 애플리케이션의 모든 상태는 하나의 객체(store)에서 관리됩니다. 
// 리듀서는 이전 상태와 액션을 받아서 상태를 변환하는 순수 함수입니다.
// (previousStatus, action) => nextStatus
// 리듀서에서 하지 말아야 할일
// 1. 인수들을 변경하기
// 2. API 호출이나 라우팅 변환과 같은 사이드 이팩트를 일으키기
// 3. Date.now()나 Math.random() 같이 순수하지 않은 함수를 호출하기
// 절대로 previousStatus 값을 변경하지 않습니다.
// default의 경우는 이전 상태를 반환합니다.
// 

const todo = (previousStatus, action) => {
    let newStatus = Object.assign({}, previousStatus);

    switch(action.type) {
        case "ADD_TODO":
            newStatus = {
                id: action.payload.id,
                text: action.payload.text,
                isCompleted: false
            };
        case "TOGGLE_TODO":
        default: 
    }

    return newStatus;
};


const todos = (previousTodos = [], action) => {
    const nextTodos = [...previousTodos];
    switch(action.type) {
        case "ADD_TODO":
            nextTodos.push(todo(undefined, action));
            break;
        case "TOGGLE_TODO":
        default: 
    }    
    return nextTodos;
};



export default todos;