import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        'users': [],
        'departments': [],
        'locations': []
    },
    reducers: {
        setUser: (state, action)=>{
            state.users = action.payload
        },
        addUser: (state, action)=>{
            state.users = [...state.users, action.payload]
        },
        setDepartment: (state, action)=>{
            state.departments = action.payload
        },
        addDepartment: (state, action)=>{
            state.departments = [...state.departments, action.payload]
        },
        setLocation: (state, action)=>{
            state.locations = action.payload
        },
        addLocation: (state, action)=>{
            state.locations = [...state.locations, action.payload]
        },
        deleteLocation: (state, action)=>{
            let arr = state.locations.filter(el=>{return el.id != action.payload})
            state.locations = arr
        }
    },
})

export default userSlice.reducer

export const {setUser, addUser, setDepartment, addDepartment, setLocation, addLocation, deleteLocation} = userSlice.actions

export const fetchDepartments =()=> async dispatch => {
    try {
        await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchDepartments').then(resp=>{
            if (resp.data.message == 'ok') {
                dispatch(setDepartment(resp.data.data))
            }
        })
    } catch (error) {
        
    }
}

export const fetchLocations =()=> async dispatch => {
    try {
        await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchLocations').then(resp=>{
            if (resp.data.message == 'ok') {
                dispatch(setLocation(resp.data.arr))
            }
        })
    } catch (error) {
        return console.log(error.message)
    }
}

export const addNewLocation =(name)=> async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addNewLocation',{
            name: name
        }).then(resp=>{
            if (resp.data.message == 'ok') {
                dispatch(addLocation({id:resp.data.id, name:name}))
            }
        })
    } catch (error) {
        return console.log(error.message)
    }
}

export const deleteOneLocation =(id)=> async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/deleteLocation',{
            id: id
        }).then(resp=>{
            if (resp.data.message == 'ok') {
                dispatch(deleteLocation(id))
            }
        })
    } catch (error) {
        return console.log(error.message)
    }
}