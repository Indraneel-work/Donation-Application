import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import User from './reducers/User';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';
import {logger} from 'redux-logger';

const rootReducer = combineReducers({
    user: User,
    categories: Categories,
    donations: Donations,
});

const configuration = {
    key:'root',
    storage:AsyncStorage,
    version:1,
};

const persistedReduce = persistReducer(configuration,rootReducer);

const store = configureStore({
    reducer: persistedReduce,
    //used to generate log of actions performed when changing states.
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck : false,
        }).concat(logger);
    },
});

export default store;

export const persistor = persistStore(store);

// This can be used to clean the persisted storage and reinitialize values in it.
// persistor.purge();
