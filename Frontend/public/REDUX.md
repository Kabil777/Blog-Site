

![rust](https://opensource.com/sites/default/files/lead-images/rust_programming_crab_sea.png)

### Folder Structure :
```bash
  .
 ├──  App.css
 ├──  App.jsx
 ├──  assets
 │ └── 󰕙 react.svg
 ├──  component
 │ └──  ShowPost.jsx
 ├──  index.css
 ├──  main.jsx
 └──  store
 ├──  GetUser.jsx
 └──  store.jsx
```

### Basic Store Configuration :

  ContentUsing `ConfigureStore` from reduxjs/toolkit to create a sample store.

```jsx
import { configureStore } from '@reduxjs/toolkit';
import Got from './GetUser';
export const store = configureStore({
  reducer: {
    Post: Got,
  },
});
```

### Setup a Inital slice:

 Setting up slice using createSlice and named it as GetPost which holds the temporary UserArray and has reducer to add existing values.

```JSX
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const GetPost = createSlice({
	name: "GetPost",
	initialState: {
	 UserArr: [],
	 loading:true,
	 error:''
	},
	reducers: {
		AddPost: (state, action) => {
			state.UserArr.push(action.payload);
		 		},
	},
export const { AddPost } = GetPost.actions;
export default GetPost.reducer;
```

### USING axios and createAsyncThunk :

 createAsyncThunk is a utility provided by Redux Toolkit that simplifies the process of handling asynchronous operations, such as API calls, within Redux applications.
 Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js.

> AsyncThunk :

```JSX
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk( '/post/fetchpost',
  async()=>{
	try{
const response = await axios.get('https://jsonplaceholder.typicode.com/users')
	 return [...response.data]
	}
    catch(error){
 throw new Error(error.message);
    }
  }
)
```

> extra builders :


```JSX
 extraReducers(builder) {
      builder.addCase(fetchUser.pending,(state)=>{
	state.loading=true
      })
      builder.addCase(fetchUser.fulfilled,(state,action)=>{
	state.UserArr = action.payload
	state.loading=false
      })
      builder.addCase(fetchUser.rejected,(state,action)=>{
	state.loading=false
	state.error= action.error.message
      })
  }
```
