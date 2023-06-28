import './App.css';
import { useState, useEffect, useCallback } from 'react';
import AddButton from './components/Button/AddButton';
import TeamTable from './components/Table/TeamTable';
import { deleteTeam } from './apis/teamApi';
import axios from 'axios';
function App() {

  const [teams, setTeams] = useState([])

  const handleDelete = async (id) =>{
    await deleteTeam(id);
    setTeams(teams.filter((team) => team.id !== id));
    } 

  useEffect(() => {
    axios.get("http://localhost:5000/teams")
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error("Error fetching teams:", error);
      });
  }, []);
  return (
    <>
    <AddButton/>
    <TeamTable teams = {teams} handleDelete = {handleDelete}/>
    </>
    //  <AddTeam></AddTeam>
  );
}

export default App;





//   const data = [
//     {
//       id:1,
//       name: 'Bournemouth',
//       shortname: 'Bournemouth',
//       abbr:'BOU',
//       logo: 'https://resources.premierleague.com/premierleague/badges/rb/t91.svg'
//     },
//     {
//       id:2,
//       name: 'Arsenal',
//       shortname: 'Arsenal',
//       abbr:'ARS',
//       logo: 'https://resources.premierleague.com/premierleague/badges/rb/t3.svg '
//     },
//     {
//       id:3,
//       name: 'Aston Villa',
//       shortname: 'Aston Villa',
//       abbr:'AVL',
//       logo: 'https://resources.premierleague.com/premierleague/badges/rb/t7.svg'
//     },
//     {
//       id:4,
//       name: 'Brentford',
//       shortname: 'Brentford',
//       abbr:'BRE',
//       logo: 'https://resources.premierleague.com/premierleague/badges/rb/t94.svg '
//     }
// ]

// setTeamData(teamData.filter((record) => record.id !== id));