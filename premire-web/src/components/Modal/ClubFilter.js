import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { useState, useEffect } from "react";
import MatchDay from "../MatchDay/MatchDay";
import MatchDayTest from "../MatchDayTest/MatchDayTest";
export default function ClubFilter({ isResult }) {
  const [club, setClub] = useState("");
  const [dataMatch, setDataMatch] = useState([]);
  const [teams, setTeams] = useState([]);

  const fetchMatchClub = async (club) => {
    if (club === "") {
      const response = await axios.get("http://localhost:5000/matchdays");
      setDataMatch(response.data);
    } else {
      const response = await axios.get(
        `http://localhost:5000/matchdays?clubId=${club}`
      );
      setDataMatch(response.data);
    }
  };
  useEffect(() => {
    fetchMatchClub(club);
  }, [club]);

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
      setTeams(response.data);
    }
    fetchTeam();
  }, []);

  const handleChange = (event) => {
    setClub(event.target.value);
  };

  return (
    <>
      <div className="px-[25px] xl:px-[200px] mt-4">
        <FormControl sx={{ m: 1, minWidth: 160, margin: 0}}
        >
          <InputLabel id="demo-simple-select-autowidth-label"
            className="p-0"
          
          >
            Filter by club
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={club}
            onChange={handleChange}
            label="Filter by team"
            className="p-0"
          >
            <MenuItem value="">
              <em>All clubs</em>
            </MenuItem>
            {teams.map((team) => (
              <MenuItem key={team.id} value={team.id} sx={{ width: "50px" }}>
                {team.shortName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      <MatchDay dataMatch={dataMatch} isResult={isResult} />
      </div>
    </>
  );
}
