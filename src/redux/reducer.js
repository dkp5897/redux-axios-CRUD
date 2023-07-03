import { createSlice } from "@reduxjs/toolkit";
import { createUser, getAllUser, userDelete, userUpdate } from "./actions";


const userSlice = createSlice({
    name:'user',
    initialState:{
        loading:false,
        users:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getAllUser.fulfilled ,(state,action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(getAllUser.rejected, (state,action)=>{
            state.loading = false;
            state.users = [];
            state.error = action.error.message
        })

        //create user
        .addCase(createUser.pending ,(state)=>{
            state.loading = true;
        })
        .addCase(createUser.fulfilled ,(state,action)=>{
            state.loading = false;
            state.users.push(action.payload);
        })
        .addCase(createUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })

        //delete user

        .addCase(userDelete.pending ,(state)=>{
            state.loading = true;
        })
        .addCase(userDelete.fulfilled ,(state,action)=>{
            // console.log(action.payload)
            state.loading = false
            const {id}  = action.payload;
            const data1 = state.users.find((ele)=>ele.id === id)
            if(data1){
               state.users =  state.users.filter((ele)=>ele.id !== id)
            }
        })
        .addCase(userDelete.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })

        //user update

        .addCase(userUpdate.pending ,(state)=>{
            state.loading = true;
        })
        .addCase(userUpdate.fulfilled ,(state,action)=>{
            state.loading = false
            // console.log(action.payload)
            state.users = state.users.map((ele)=>{
                if(ele.id === action.payload.id){
                    return (ele = action.payload)
                }else{
                   return ele
                }
            })
            
        })
        .addCase(userUpdate.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer