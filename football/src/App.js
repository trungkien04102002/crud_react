import './App.css';
import { useState, useEffect, useCallback } from 'react';
import AddButton from './components/Button/AddButton';
import TeamTable from './components/Table/TeamTable';
import AddTeam from './components/Pages/NewTeam/AddTeam';
import { deleteTeam, createTeam, updateTeam } from './apis/teamApi';
import axios from 'axios';
function App() {

  const [teams, setTeams] = useState([])
  
  const handleDelete = async (id) =>{
    await deleteTeam(id);
    await resetData();
    } 

  const handleCreate = async (event) =>{
    event.preventDefault();
    const newTeam = {
      name: event.target.elements.name.value || "new name",
      shortName: event.target.elements.shortName.value || "new short name",
      abbr: event.target.elements.abbr.value || "new abbr",
      logo: event.target.elements.logo.value || "new logo",
    };
    await createTeam(newTeam)
    await resetData();
  }

  const handleSubmitUpdate = async (event) =>{
    event.preventDefault();
    const id = event.target.elements.id.value
    const newTeam = {
      name: event.target.elements.name.value ,
      shortName: event.target.elements.shortName.value ,
      abbr: event.target.elements.abbr.value,
      logo: event.target.elements.logo.value,
    };
    await updateTeam(id, newTeam)
    await resetData();
  }

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/teams");
    setTeams(response.data);
  };
  
  const resetData = async () => {
    const response = await axios.get("http://localhost:5000/teams");
    setTeams(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
    <AddButton/>
    <AddTeam handleCreate ={handleCreate}/>
    <TeamTable teams = {teams} handleDelete = {handleDelete} handleSubmitUpdate = {handleSubmitUpdate} />
    </>

  );
}


export default App;


// i want 
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