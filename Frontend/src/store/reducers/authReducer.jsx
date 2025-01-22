import {
	createSlice,
	createAsyncThunk,
	isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getInitialCredits = createAsyncThunk(
	"auth/getInitialCredits",
	async () => {
		try {
			const response = await axios.get("http://localhost:7000/user", {
				withCredentials: true,
			});
			if (!response) throw new Error("Failed to fetch user details");
			console.log(response.data);
			return response.data;
		} catch (error) {
			return isRejectedWithValue(error.message);
		}
	},
);
const initialCredits = {
	userDetails: {},
	status: "loading",
};
const authDetais = createSlice({
	name: "UserDetails",
	initialState: initialCredits,
	reducers: {
		setCredits: (state, action) => {
			console.log(action.payload);
			state.userDetails = action.payload;
			console.log("Data :", state.userDetails);
		},
		logout: (state, action) => {
			state.userDetails = {};
		},
	},
	extraReducers(builder) {
		builder.addCase(getInitialCredits.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(getInitialCredits.fulfilled, (state, action) => {
			state.status = "success";
			state.userDetails = action.payload;
		});
		builder.addCase(getInitialCredits.rejected, (state) => {
			state.status = "failed";
		});
	},
});

export const { setCredits } = authDetais.actions;
export default authDetais.reducer;
