import React, {useEffect, useState} from 'react';
import {deleteUser, listUser} from "../apiRequest/apiRequest.js";
import Animation from "../assets/Animation.jsx";
import {Link} from "react-router-dom";
import {toast, Toaster} from "react-hot-toast";


const ListStudents = () => {

    let [data, setData] = useState([]);
    let [change,setChange]=useState(0); //used to refresh the list api on delete
    useEffect(() => {
        (async () => {
            let res = await listUser();
            setData(res);
        })()
    }, [change]);       // call on setChange


    const deleteItem= async (id)=>{
        let res= await deleteUser(id);
        if (res){
            toast.success("Delete Completed");
            setChange(new Date().getTime());
        }
        else{
            toast.error("Something went wrong!")
        }
    }



    if (data.length === 0) {
        return (
            <div>
                <Animation/>
            </div>
        )
    } else {
        return (
                <div className="overflow-x-auto md:px-10 px-3 min-h-screen">
                    <table className="table sm:table-lg hidden sm:table">
                        {/* head */}
                        <thead className="text-base">
                        <tr>

                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Admission Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {/* row 1 */}
                        {data.map((item,i)=>{
                            return <tr key={i}>

                            <td>
                                <div className="flex items-center gap-3">

                                    <div>
                                        <div className="font-bold">{item['firstName']}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item['lastName']}
                            </td>
                            <td>{item['email']}</td>
                            <td>{item['phone']}</td>
                            <td>{item['admissionDate']}</td>

                            <td>
                                <Link to={'/details?id='+item['_id']}>
                                    <button className="btn btn-outline">details</button>
                                </Link>
                            </td>
                                <td className="flex gap-4 ">
                                    <Link to={'/save-page?id='+item['_id']}><button className="btn btn-success px-6 text-white"> Edit </button></Link>
                                    <button onClick={()=>{deleteItem(item['_id'])}} className="btn btn-error text-white">Delete</button>
                                </td>


                        </tr>


                        })
                            }

                        </tbody>
                    </table>

                     {/*For Phone*/}
                    <table className="table table-xs min-h-screen sm:hidden">
                        {/* head */}
                        <thead className="text-sm">
                        <tr>

                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {/* row 1 */}
                        {data.map((item,i)=>{
                            return <tr key={i}>

                                <td>
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold">{item['firstName']}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item['lastName']}
                                </td>
                                <td>{item['email']}</td>

                                <td>
                                    <Link to={'/details?id='+item['_id']}>
                                        <button className="btn btn-success">details</button>
                                    </Link>
                                </td>

                            </tr>


                        })
                        }

                        </tbody>
                    </table>




                    <Toaster position="top-center"/>
                </div>
        );
    }
}



export default ListStudents;