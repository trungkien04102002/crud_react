import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { useState, useEffect } from "react";
import MatchDay from "../MatchDay/MatchDay";
export default function ClubFilter({ isResult }) {
  const [club, setClub] = useState("");
  const [dataMatch, setDataMatch] = useState([]);
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const response = await axios.get("http://localhost:5000/teams");
    setTeams(response.data.teams);
  };
  const fetchMatchClub = async (club) => {
    if (club === "") {
      const response = await axios.get("http://localhost:5000/matchdays");
      setDataMatch(response.data);
    } else {
      const response = await axios.get(
        `http://localhost:5000/matches/team/${club}`
      );
      setDataMatch(response.data);
    }
  };
  //   const fetchMatchGameweek = async (gameweek) => {
  //     if (gameweek === "") {
  //       const response = await axios.get("http://localhost:5000/matchdays");
  //       setDataMatch(response.data);
  //     } else {
  //       const response = await axios.get(
  //         `http://localhost:5000/matchdays?gameweek=${gameweek}`
  //       );
  //       setDataMatch(response.data);
  //     }
  //   };

  useEffect(() => {
    async function fetchTeam() {
        const response = await axios.get("http://localhost:5000/teams");
        setTeams(response.data.teams);
        console.log("1234", teams);
      }
      fetchTeam();
  }, []);
  useEffect(() => {
    fetchMatchClub(club);
  }, [club]);

  const handleChange = (event) => {
    setClub(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 160 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Filter by club
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={club}
            onChange={handleChange}
            label="Filter by team"
            
          >
            <MenuItem value="">
              <em>All clubs</em>
            </MenuItem>
            {teams.map((team) => (
              <MenuItem key={team.id} value={team.id} sx={{ width: '50px'}}>
                {team.shortName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <MatchDay dataMatch={dataMatch} isResult={isResult} />
    </>
  );
}
