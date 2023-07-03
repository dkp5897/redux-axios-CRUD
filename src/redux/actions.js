import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk ('getAllUser',async()=>{

    try {
        const user = await axios.get("https://64a2d298b45881cc0ae5c169.mockapi.io/user");
        // console.log(user.data)
        return user.data

    } catch (error) {
        // console.log(error)
        return Promise.reject(error)
    }
})

export const createUser = createAsyncThunk('create',async (data)=>{

    try {
        
        const user = await axios.post("https://64a2d298b45881cc0ae5c169.mockapi.io/user",data)

        // console.log(user.data)
        return user.data

    } catch (error) {
        Promise.reject(error)
    }

})


export const userDelete = createAsyncThunk('delete',async (id)=>{

    try {
        
        const user = await axios.delete(`https://64a2d298b45881cc0ae5c169.mockapi.io/user/${id}`)
        // console.log(user.data)
        return user.data

    } catch (error) {
        Promise.reject(error)
    }

})

export const userUpdate = createAsyncThunk('update',async ({getId,getInput})=>{

    try {
        
        const user =await axios.put(`https://64a2d298b45881cc0ae5c169.mockapi.io/user/${getId}`,getInput)

        return user.data

    } catch (error) {
        Promise.reject(error)
    }

})