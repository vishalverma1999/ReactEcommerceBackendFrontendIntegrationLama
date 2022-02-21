import { configureStore, combineReducers } from "@reduxjs/toolkit"   // creating global store
import cartReducer from './cartRedux'    // importing reducer
import userReducer from './userSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({ cart: cartReducer, user: userReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // writting all reducers present in store
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store);
