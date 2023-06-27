import axios from "axios";
export const deleteTeam = async (id)=>{
    if(id===undefined) return;
    const url = "http://localhost:5000/teams/"+ id;
    try {
      // make axios post request
      const res = await axios({
        method: "delete",
        url: url,
      });
      console.log(res)
      return res.data;
    } catch(error) {
        return error.response.data;
    }
}
