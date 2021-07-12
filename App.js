import React from 'react';
import {StatusBar} from 'react-native';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/common/store/configureStore';
import Navigator from './src/common/routers';

const App = () => {
  return (
    <Root>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Navigator />
        </PersistGate>
      </Provider>
    </Root>
  );
};

export default App;
