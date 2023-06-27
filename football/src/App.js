import './App.css';
import { useState, useEffect } from 'react';
import AddTeam from './components/Form/AddTeam';
import UpdateTeam from './components/Form/UpdateTeam';
import TeamTable from './components/Table/TeamTable';
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

function App() {
  const [teams, setTeams] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:5000/teams')
      .then(response => response.json())
      .then(teams => setTeams(teams))
  },[])
  return (
  //  <AddTeam></AddTeam>
  <TeamTable teams = {teams}></TeamTable>
  );
}

export default App;
