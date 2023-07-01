import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { useState, useEffect } from "react";
import MatchDay from "../MatchDay/MatchDay";
export default function GameweekFilter() {
  const arr = Array.from({ length: 38 }, (_, i) => i + 1);
  const [gameweek, setGameweek] = useState('');
  const [dataMatch, setDataMatch] = useState([]);
  const fetchMatchGameweek = async (gameweek) => {
    if (gameweek === "") {
      const response = await axios.get("http://localhost:5000/matchdays");
      setDataMatch(response.data);
    } else {
      const response = await axios.get(
        `http://localhost:5000/matchdays?gameweek=${gameweek}`
      );
      setDataMatch(response.data);
    }
  };

  useEffect(() => {
    fetchMatchGameweek(gameweek);
  }, [gameweek]);

  const handleChange = (event) => {
    setGameweek(event.target.value);
  };

  return (
<>
<div>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          All matches
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={gameweek}
          onChange={handleChange}
          label="Filter by gameweek"
        >
          <MenuItem value="">
            <em>All matches</em>
          </MenuItem>
          {arr.map((e) => (
            <MenuItem
              key={e}
              value={e}
              sx={{ width: 120 }}
            >{`Gameweek ${e}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <MatchDay dataMatch = {dataMatch}/></>
  );
}
