import { createSlice } from '@reduxjs/toolkit';

interface IUserStore {
	isAuth: boolean;
	user: IUserResponse
}
export interface IUserResponse {
	accessToken: string;
	auth: {};
	displayName: string;
	email: string;
	emailVerified: boolean;
	isAnonymous: boolean;
	metadata: {};
	phoneNumber: null | string;
	photoURL: string;
	proactiveRefresh: {};
	providerData: [{}];
	providerId: null | string;
	reloadListener: null | string;
	reloadUserInfo: {};
	stsTokenManager: {};
	tenantId: null | string;
	uid: null | string;
}
const initialState: IUserStore = {
	isAuth: false,
	user: {
		accessToken: '',
		auth: {},
		displayName: '',
		email: '',
		emailVerified: false,
		isAnonymous: false,
		metadata: {},
		phoneNumber: '',
		photoURL: '',
		proactiveRefresh: {},
		providerData: [{}],
		providerId: '',
		reloadListener: '',
		reloadUserInfo: {},
		stsTokenManager: {},
		tenantId: '',
		uid: '',
	}

};

const userSlice = createSlice({
	name: 'names',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.isAuth = true;
			state.user = payload.user;
		},
		unsetUser: (state) => {
			state.isAuth = false;
			state.user = initialState.user;
		},
	},
});

export default userSlice.reducer;
export const { setUser, unsetUser } = userSlice.actions;
