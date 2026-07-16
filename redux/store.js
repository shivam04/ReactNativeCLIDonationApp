import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import User from "./reducers/User";
import Categories from "./reducers/Categories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logger } from "redux-logger";

const rootReducer = combineReducers({
    user: User,
    categories: Categories
})

const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version: 1
}

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(logger),
})

export default store;

export const persistor = persistStore(store);