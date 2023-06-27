import './App.css';
import { useState, useEffect, useCallback } from 'react';
import AddButton from './components/Button/AddButton';
import TeamTable from './components/Table/TeamTable';

function App() {
  const [teams, setTeams] = useState([])
  const fetchTeamsHandler = useCallback(async () => {
    const response = await fetch('http://localhost:5000/teams');
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    const loadedTeams = [];

    for (let i = 0; i < data.length; i++) {
      loadedTeams.push({
        id: data[i].id,
        name: data[i].name,
        shortName: data[i].shortName,
        abbr:data[i].abbr,
        logo: data[i].logo
      });
    }
    setTeams(loadedTeams);
  },[]);

    useEffect(() => {
      fetchTeamsHandler();
    }, []);

  return (
    <>
    <AddButton/>
    <TeamTable teams = {teams}/>
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