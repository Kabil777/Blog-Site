import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInitialCredits = createAsyncThunk(
	"auth/getInitialCredits",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get("http://localhost:7000/user", {
				withCredentials: true,
			});
			if (!response) throw new Error("Failed to fetch user details");
			console.log(response.data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
const initialCredits = {
	authenticated: false,
	id: "",
	name: "",
	email: "",
	status: "loading",
};
const authDetais = createSlice({
	name: "UserDetails",
	initialState: initialCredits,
	reducers: {
		setCredits: (state, action) => {
			(state.id = action.payload.id),
				(state.name = action.payload.name),
				(state.email = action.payload.email);
		},
		logout: (state, action) => {
			state.userDetails = {};
			state.id = "";
			state.name = "";
			state.email = "";
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getInitialCredits.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getInitialCredits.fulfilled, (state, action) => {
				state.status = "success";
				state.authenticated = true;
				state.id = action.payload.id;
				state.name = action.payload.name;
				state.email = action.payload.email;
				console.log(state.authenticated);
			})
			.addCase(getInitialCredits.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const { setCredits } = authDetais.actions;
export default authDetais.reducer;
