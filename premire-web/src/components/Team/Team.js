
import { useState, useEffect } from "react";
import axios from "axios";
import TeamTable from "./TeamTable";

export default function Team(){
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        async function fetchTeam() {
            const response = await axios.get("http://localhost:5000/teams");
            setTeams(response.data);
          }
          fetchTeam();
      }, []);
    return (
        <>
        <div className="mx-[50px]">
            <TeamTable teams = {teams}/>
        </div>
        </>
    )

}