import {
  ThunkAction,
  Action,
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import TodoReducer from '@redux/Reducer/TodoListReducer';

export const rootReducer = combineReducers({ TodoReducer });

export const store = createStore(rootReducer, applyMiddleware(logger));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
