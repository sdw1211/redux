const visibilityFilter = (previousStatus, action) => {

    let nextStatus = previousStatus;

    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            nextStatus = action.payload();
            break;
    }

    return nextStatus;
};

export default visibilityFilter;