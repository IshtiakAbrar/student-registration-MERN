import React, {useEffect, useState} from 'react';
import {createUser, updateUser, userDetailsById} from "../apiRequest/apiRequest.js";
import {toast, Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const InputField = () => {

    const urlParams = new URLSearchParams(window.location.search)           //used to update user using same page
    let id = urlParams.get('id')


    let navigate=useNavigate();
    let [user, setUser] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        nationality: "",
        address: "",
        email: "",
        phone: "",
        courses: "",
        admissionDate: ""
    })

    useEffect(() => {
        (async()=>{
            if (id!==null){

                let res= await userDetailsById(id);

                setUser({
                    firstName: res['firstName'],
                    lastName: res['lastName'],
                    gender: res['gender'],
                    dateOfBirth: res['dateOfBirth'],
                    nationality: res['nationality'],
                    address: res['address'],
                    email: res['email'],
                    phone: res['phone'],
                    courses: res['courses'],
                    admissionDate: res['admissionDate']
                })

            }
        })()
    }, []);


    const changeInput = (key, value) => {
        setUser(user => ({
            ...user,
            [key]: value
        }))
    }

    const handleSubmit= async () => {
       if(user.firstName.length===0){
           toast.error('First name required !')
       }
        else if(user.lastName.length===0){
            toast.error('Last name required !')
        }
        else if(user.gender.length===0){
            toast.error('Gender required !')
        }
       else if(user.dateOfBirth.length===0){
           toast.error('Date of birth required !')
       }
       else if(user.nationality.length===0){
           toast.error('Nationality required !')
       }
       else if(user.address.length===0){
           toast.error('Address required !')
       }
       else if(user.email.length===0){
           toast.error('Email required !')
       }
       else if(user.phone.length===0){
           toast.error('Phone required !')
       }
       else if(user.courses.length===0){
           toast.error('Courses required !')
       }
       else if(user.admissionDate.length===0){
           toast.error('Admission date required !')
       }

       else{
           if (id===null) {                                      //for create user
               const res = await createUser(user);
               if (res === "Success") {
                   navigate("/")

                   setTimeout(() => {
                       toast.success("User created successfully")
                   }, 500)
               } else {
                   toast.error("Failed")
               }
           }
           else{                                                             //to update user
               const res = await updateUser(user,id);
               if (res) {
                   navigate("/")

                   setTimeout(() => {
                       toast.success("User updated successfully")
                   }, 500)
               }
               else {
                   toast.error("Update failed")
               }

           }
       }
    }


    return (
        <div>

            <div className="form-control md:mt-[4rem] gap-6 px-10 sm:px-20 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3" >

                <div><label className="label label-text ">First Name</label>
                <input type="text" value={user.firstName}
                       onChange={(e)=>{changeInput('firstName',e.target.value)}}
                       placeholder="First Name" className="input input-bordered w-full max-w-xs flex justify-center" /></div>

                <div><label className="label label-text"> Last Name</label>
                <input type="text" value={user.lastName}
                       onChange={(e)=>{changeInput('lastName',e.target.value)}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>

                <div><label className="label label-text">Gender</label>
                <input type="text" value={user.gender}
                       onChange={(e)=>{changeInput('gender',e.target.value)}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>

                <div><label className="label label-text">DateOfBirth</label>
                <input type="date" value={user.dateOfBirth.split('T')[0] || new Date().toJSON().slice(0, 10)}
                       onChange={(e)=>
                       {changeInput('dateOfBirth',e.target.value.split('T')[0])}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>

                <div><label className="label label-text">Nationality</label>
                <input type="text" value={user.nationality}
                       onChange={(e)=>{changeInput('nationality',e.target.value)}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>

                <div> <label className="label label-text">Address</label>
                <input type="text" value={user.address}
                       onChange={(e)=>{changeInput('address',e.target.value)}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>

                <div><label className="label label-text">Email</label>
                <input type="text" value={user.email}
                       onChange={(e)=>{changeInput('email',e.target.value)}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>

                <div> <label className="label label-text">Phone</label>
                <input type="text" value={user.phone}
                       onChange={(e)=>{changeInput('phone',e.target.value)}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>

                <div><label className="label label-text">Courses</label>
                <input type="text" value={user.courses}
                       onChange={(e)=>{changeInput('courses',e.target.value)}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>

                <div><label className="label label-text">Admission Date</label>
                <input type="text" value={user.admissionDate || new Date().toJSON().slice(0, 10)}
                       onChange={(e)=>{changeInput('admissionDate',e.target.value)}}
                       placeholder="Type here" className="input input-bordered w-full max-w-xs" /></div>
            </div>
            <div className="flex justify-center py-8">
                <button onClick={()=>{handleSubmit()}} className="btn btn-success min-w-[15rem] text-white text-xl">Submit</button>
            </div>
            <Toaster position="top-center"/>
        </div>
    );
};

export default InputField;