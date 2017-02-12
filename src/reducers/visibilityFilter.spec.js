import visibilityFilter from './visibilityFilter';


describe('visibilityFilter reducers', () => {
    it('filter에 맞게 실행되는 검색', () => {
        expect(visibilityFilter('SHOW_ALL', {})).toEqual('SHOW_ALL');
    });

    it('filter에서 type이 SET_VISIBILITY_FILTER 인 경우 action.payload를 실행하도록 처리', () => {
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            payload: function() {}
        };

        spyOn(action, 'payload');
        const result = visibilityFilter('SHOW_ALL', action);

        expect(action.payload).toHaveBeenCalled();
    });

    it('filter에서 type이 SET_VISIBILITY_FILTER 가 아닌 경우 action.payload를 실행하지 않도록 처리', () => {
        const action = {
            type: 'SET_ALL',
            payload: function() {}
        };

        spyOn(action, 'payload');
        const result = visibilityFilter('SHOW_ALL', action);

        expect(action.payload).not.toHaveBeenCalled();
    });    
});