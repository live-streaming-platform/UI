import {
    applyMiddleware,
    combineReducers,
    createStore,
    Reducer,
    Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user/reducer';
import {UserAction} from './user/actions';
import {userSaga} from './user/saga';
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
import {ChannelAction} from "./channel/actions";
import channelReducer from "./channel/reducer";

const rootReducer = combineReducers({user: userReducer, channel: channelReducer});

export type AppState = ReturnType<typeof rootReducer>;

export type AppAction = {
    user: UserAction,
    channel: ChannelAction
};

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['users'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(userSaga);

    return store;
}

const store = configureStore();

export default store

export const persistor = persistStore(store)