![rust](https://opensource.com/sites/default/files/lead-images/rust_programming_crab_sea.png)



### Folder Structure :



```bash

&#x20; .

&#x20;├──  App.css

&#x20;├──  App.jsx

&#x20;├──  assets

&#x20;│ └── 󰕙 react.svg

&#x20;├──  component

&#x20;│ └──  ShowPost.jsx

&#x20;├──  index.css

&#x20;├──  main.jsx

&#x20;└──  store

&#x20;├──  GetUser.jsx

&#x20;└──  store.jsx

```



### Basic Store Configuration :



ContentUsing `ConfigureStore` from reduxjs/toolkit to create a sample store.



```jsx live

import { configureStore } from '@reduxjs/toolkit';

import Got from './GetUser';

export const store = configureStore({

&#x20; reducer: {

&#x20;   Post: Got,

&#x20; },

});

```



### Setup a Inital slice:



Setting up slice using createSlice and named it as GetPost which holds the temporary UserArray and has reducer to add existing values.



```JSX

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetPost = createSlice({

&#x20;       name: "GetPost",

&#x20;       initialState: {

&#x20;        UserArr: [],

&#x20;        loading:true,

&#x20;        error:''

&#x20;       },

&#x20;       reducers: {

&#x20;               AddPost: (state, action) => {

&#x20;                       state.UserArr.push(action.payload);

&#x20;                               },

&#x20;       },

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

&#x20; async()=>{

&#x20;       try{

const response = await axios.get('https://jsonplaceholder.typicode.com/users')

&#x20;        return [...response.data]

&#x20;       }

&#x20;   catch(error){

&#x20;throw new Error(error.message);

&#x20;   }

&#x20; }

)

```



> extra builders :



```JSX

&#x20;extraReducers(builder) {

&#x20;     builder.addCase(fetchUser.pending,(state)=>{

&#x20;       state.loading=true

&#x20;     })

&#x20;     builder.addCase(fetchUser.fulfilled,(state,action)=>{

&#x20;       state.UserArr = action.payload

&#x20;       state.loading=false

&#x20;     })

&#x20;     builder.addCase(fetchUser.rejected,(state,action)=>{

&#x20;       state.loading=false

&#x20;       state.error= action.error.message

&#x20;     })

&#x20; }

```