import Home from './components/Pages/Home/Home';
import AddTeam from './components/Pages/NewTeam/AddTeam';
// import {Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Team" element={<AddTeam/>}/>
  </Routes>
  </>
  )
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