import * as actions from './index';

describe('todo actions', () => {
    it('addTodo 함수 실행 시 ADO_TODO action을 생성해야한다.', () => {
        expect(actions.addTodo('Use Redux')).toEqual({
            type: 'ADD_TODO',
            payload: {
                id: 0,
                text: 'Use Redux'
            }
        });
        expect(actions.addTodo('Use Redux')).toEqual({
            type: 'ADD_TODO',
            payload: {
                id: 1,
                text: 'Use Redux'
            }
        });        
    });

    it('setVisibilityFilter 함수 실행 시 SET_VISIBILITY_FILTER action을 생성한다.', () => {
        expect(actions.setVisibilityFilter('active')).toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter: 'active'
        });
    });

    it('toogleTodo 함수는 TOGGLE_TODO action을 생성한다.', () => {
        expect(actions.toggleTodo(1)).toEqual({
            type: 'TOGGLE_TODO',
            id: 1
        });
    });
});