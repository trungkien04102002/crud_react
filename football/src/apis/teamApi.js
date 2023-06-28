import axios from "axios";

export const deleteTeam = async (id)=>{
    if(id===undefined) return;
    const url = "http://localhost:5000/teams/"+ id;
    try {
      const res = await axios({
        method: "delete",
        url: url,
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
}

export const createTeam = async(formValue) => {
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/teams",
        data: formValue,
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
    } catch(error) {
        return error.response.data;
    }
}

export const updateTeam = async (id, formValue) => {
    try {
      const res = await axios({
        method: "patch",
        url: "http://localhost:5000/teams/" + id,
        data: formValue,
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
    } catch(error) {
        return error.response.data;
    }
}

