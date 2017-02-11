import todos from './todos';

describe('todos reducers', () => {
    it('빈값이 들어올 경우 처리', () => {
        expect(todos(undefined, {})).toEqual([]);
    });
    it('ADO_TODO를 다룬다', () => {
        expect(todos([], {
            type: 'ADD_TODO', 
            payload: {
                text: 'Run the tests',
                id: 0
            }
        })).toEqual([{
            text: 'Run the tests',
            isCompleted: false,
            id: 0
        }]);
    });
});