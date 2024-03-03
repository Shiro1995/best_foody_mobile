import React from 'react';

import MainStack from '@navigation/MainStack';
import { store } from '@store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
