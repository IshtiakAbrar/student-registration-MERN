import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {deleteUser, userDetailsById} from "../apiRequest/apiRequest.js";
import {toast, Toaster} from "react-hot-toast";

const Details = () => {
    const navigate=useNavigate();
    const urlParams = new URLSearchParams(window.location.search)
    let id = urlParams.get('id')

    let [data,setData]=useState([])

    useEffect(() => {
        (async()=>{
            let res= await userDetailsById(id);
            setData(res);
        })()
    }, []);


    const deleteItem= async (id)=>{
        let res= await deleteUser(id);
        if (res){
            navigate("/")
            setTimeout(() => {
                toast.success("Delete Completed");
            }, 500)
        }
        else{
            toast.error("Something went wrong!")
        }
    }

    let bDate= (data['dateOfBirth'] || '').split('T')[0]; //don't know how this works :p

    return (

            <div className="hero min-h-screen">
                <div className="hero-content text-center md:min-w-[40rem] lg:min-w-[60rem] card shadow-2xl min-w-[350px] md:my-8">
                    <div className="max-w-lg md:min-w-full ">



                        {/*For Mobile*/}
                        <div className="sm:hidden block pt-1 sm:justify-evenly"><Link to="/">
                            <button className="btn bg-gray-400 hover:bg-emerald-800 text-white">{'<'} Go Back
                            </button></Link></div>

                        <h1 className="text-3xl md:text-5xl font-bold py-6 justify-center">User Details</h1>


                        <div className="overflow-x-auto">
                            <table className="table text-base">
                                {/* head */}
                                <thead>
                                <tr className="text-lg">

                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}

                                       <tr>
                                           <td className="font-semibold">First Name</td>
                                           <td>{data['firstName']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">Last Name</td>
                                           <td>{data['lastName']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">gender</td>
                                           <td>{data['gender']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">Date Of Birth</td>
                                           <td>{bDate || data['dateOfBirth']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">nationality</td>
                                           <td>{data['nationality']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">address</td>
                                           <td>{data['address']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">email</td>
                                           <td>{data['email']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">phone</td>
                                           <td>{data['phone']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">courses</td>
                                           <td>{data['courses']}</td>
                                       </tr>
                                       <tr>
                                           <td className="font-semibold">admissionDate</td>
                                           <td>{data['admissionDate']}</td>
                                       </tr>



                                </tbody>
                            </table>

                            <div className="hidden sm:flex sm:justify-center gap-8 sm:py-8"><Link to="/"><button className="btn bg-gray-800 hover:bg-emerald-800 text-white">{'<'} Go Back</button></Link>
                                <Link to={'/save-page?id='+id}><button className="btn px-8 bg-emerald-600 hover:bg-emerald-800 text-white"> Edit {'>'}</button></Link>
                            </div>

                            {/*For mobile device*/}
                            <div className="flex justify-evenly sm:hidden"><button onClick={()=>{deleteItem(id)}} className="btn btn-error px-7 text-white">Delete</button>
                                <Link to={'/save-page?id='+id}><button className="btn px-8 bg-emerald-600 hover:bg-emerald-800 text-white"> Edit {'>'}</button></Link>
                            </div>



                        </div>
                    </div>
                </div>
                <Toaster position={"top-center"}/>
            </div>

    );
};

export default Details;