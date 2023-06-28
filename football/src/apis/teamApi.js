import axios from "axios";
import TeamTable from "../components/Table/TeamTable";
export const deleteTeam = async (id)=>{
    console.log('hi')
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
