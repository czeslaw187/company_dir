import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        'users': [],
        'departments': [],
        'locations': [],
    },
    reducers: {
        setUser: (state, action)=>{
            state.users = action.payload
        },
        addUser: (state, action)=>{
            state.users = [...state.users, action.payload]
        },
        deleteUser: (state, action)=>{
            let arr = state.users.filter(el=>{return el.userid != action.payload})
            state.users = arr
        },
        setDepartment: (state, action)=>{
            state.departments = action.payload
        },
        addDepartment: (state, action)=>{
            state.departments = [...state.departments, action.payload]
        },
        deleteDepartment: (state, action)=>{
            let arr = state.departments.filter(el=>{return el.depid != action.payload})
            state.departments = arr
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

export const {setUser, addUser, deleteUser, setDepartment, addDepartment, deleteDepartment, setLocation, addLocation, deleteLocation} = userSlice.actions

export const fetchAllUsers =()=> async dispatch => {
    try {
        await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchUsers').then(resp=>{
            if (resp.data.message == 'ok') {
                dispatch(setUser(resp.data.data))
            }
        })
    } catch (error) {
        return console.log(error.message)
    }
}

export const addNewEmployee =(obj)=> async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addNewEmployee',{
            name: obj.firstName + ' ' + obj.lastName,
            email: obj.email,
            departmentid: obj.department,
            locationid: obj.location
        }).then(resp=>{dispatch(fetchAllUsers())})
    } catch (error) {
        return console.log(error.message)
    }
}

export const deleteOneEmployee =(id)=> async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/deleteUser',{
            id: id
        }).then(resp=>{dispatch(fetchAllUsers())})
    } catch (error) {
        return console.log(error.message)
    }
}

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

export const addNewDepartment =(name, locationid)=> async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addNewDepartment',{
            name: name,
            locationid: locationid
        }).then(resp=>{dispatch(fetchDepartments())})
    } catch (error) {
        return console.log(error.message)
    }
}

export const deleteOneDepartment =(id)=> async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/deleteDepartment',{
            id:id
        }).then(resp=>{dispatch(fetchDepartments())})
    } catch (error) {
        return console.log(error.message)
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
        }).then(resp=>{dispatch(fetchLocations())})
    } catch (error) {
        return console.log(error.message)
    }
}

export const deleteOneLocation =(id)=> async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/deleteLocation',{
            id: id
        }).then(resp=>{dispatch(fetchLocations())})
    } catch (error) {
        return console.log(error.message)
    }
}