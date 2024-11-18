import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import NonAuthenticated from './navigation/MainNavigation';
import { AppState } from 'react-native';
import {Provider} from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './navigation/RouteNavigation';
import { checkToken } from './api/user';

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect((
  )=>{
    const subscription = AppState.addEventListener('change',async(nextAppState) => {
      if(appState.current.match(/inactive|background/) && nextAppState==='active'){
        //we are coming from background to foreground. But this area won't reach if app is being terminated and a new instance is ran.
        await checkToken();
      }
      appState.current = nextAppState;
    });
    //This will run only when new app instance runs, won't run on backgroung to foregound movement.
    checkToken();
  },[]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
