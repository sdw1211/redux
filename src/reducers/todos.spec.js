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

        expect(
            todos([
                {
                text: 'Run the tests',
                isCompleted: false,
                id: 0
                }
            ], {
                type: 'ADD_TODO',
                payload: {
                    text: 'Use Redux',
                    id: 1
                }
            })
        ).toEqual([
        {
            text: 'Run the tests',
            isCompleted: false,
            id: 0
        }, {
            text: 'Use Redux',
            isCompleted: false,
            id: 1
        }
        ]);
    });

    it('TOOGLE_TODO 를 다룬다.', () => {
        expect(
            todos([
                {
                text: 'Run the tests',
                isCompleted: false,
                id: 1
                }, {
                text: 'Use Redux',
                isCompleted: false,
                id: 0
                }
            ], {
                type: 'TOGGLE_TODO',
                payload: {
                    id: 1
                }
            })
        ).toEqual([
            {
                text: 'Run the tests',
                isCompleted: true,
                id: 1
            }, {
                text: 'Use Redux',
                isCompleted: false,
                id: 0
            }
        ]);
    });
});