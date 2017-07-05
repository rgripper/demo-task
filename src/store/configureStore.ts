import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { initialAppState, AppState } from "./app/AppState";
import logger from 'redux-logger';
import { appStateReducer } from "store/app/appStateReducer";

export function configureStore(initialState: AppState = initialAppState): Store<AppState> {
 
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(logger)(create);

  const store = createStoreWithMiddleware(appStateReducer, initialState) as Store<AppState>;

  return store;
}
