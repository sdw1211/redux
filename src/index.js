// action : 일어나는 나타내는 것들
// reducer : 액션에 따라서 상태를 수정하는 것들
// store: 이 두개를 함께 가져오는 객체
// 1. 애플리케이션의 상태를 저장하고
// 2. getState() 를 통해서 상태에 접근하게 되고,
// 3. dispatch(action) 을 통해서 상태를 수정할 수 있고,
// 4. subscribe(listener)를 통해서 리스터에 등록하게 됩니다.
// redux는 하나의 store 만 가질 수 있습니다. 데이터 다루는 것을 여러 개로 나누고 싶으면 reducer를 나워서 써라
// createStore 를 활용해서 store를 생성할 수 있습니다.
// createStore(reducers, 초기 상태 지정);


import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);