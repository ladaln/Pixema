import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';
const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.getState>;
