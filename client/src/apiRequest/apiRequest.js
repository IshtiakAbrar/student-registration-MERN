import axios from "axios";

const BaseUrl="/api/v1";

export async function createUser(reqBody){
    try {
        let res = await axios.post(BaseUrl + "/registration", reqBody);
        if (res.status === 200) {
            return res.data['status'];
        } else return false;
    }
    catch(e){
        console.error(e.toString());
    }

}
//read
export async function listUser(reqBody){
    try {
        let res = await axios.get(BaseUrl + "/read-user");
        if (res.status === 200) {
            return res.data["data"];
        } else return [];
    }
    catch(e){
        console.error(e.toString());
        return []
    }

}

export async function userDetailsById(id){
    try {
        let res = await axios.get(BaseUrl + "/read-user-by-id/"+id);
        if (res.status === 200) {
            return res.data["data"][0];
        } else return [];
    }
    catch(e){
        console.error(e.toString());
        return []
    }

}

export async function updateUser(reqBody,id){
    try {
        let res = await axios.post(BaseUrl + "/update-user/"+id,reqBody);
        if (res.status === 200) {
            return true;
        } else return false;
    }
    catch(e){
        console.error(e.toString());
        return false
    }

}

export async function deleteUser(id){
    try {
        let res = await axios.get(BaseUrl + "/delete-user/"+id);
        if (res.status === 200) {
            return true;
        } else return false;
    }
    catch(e){
        console.error(e.toString());
        return false;
    }

}