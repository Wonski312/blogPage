import { configureStore } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";

const userCredentials = createSlice({

	name: "userCredentials",
	initialState: { userLoggedIn: null },
	reducers: {
		setUpUser(state, action) {
			
				state.userLoggedIn = action.payload;
			
		},
	},
});

export const {setUpUser} = userCredentials.actions

const store = configureStore({ reducer: userCredentials.reducer });

export default store;
