import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
// import counterReducer from '../features/counter/counterSlice';

const reducer = {
  auth: authReducer,
  message: messageReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
