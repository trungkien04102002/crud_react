import { useState, useEffect, useCallback } from 'react';
import AddButton from '../../Button/AddButton';
import AddTeam from '../NewTeam/AddTeam';
import TeamTable from '../../Table/TeamTable';
import { deleteTeam, createTeam, updateTeam } from '../../../apis/teamApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom' 
export default function Home() {

  const [teams, setTeams] = useState([])
  const navigate = useNavigate()
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
    navigate('/')
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
    {/* <Routes>
    <Route path="/Team" element={<AddTeam/>}/>
    </Routes> */}
    <AddButton handleCreate ={handleCreate} />
    {/* <AddTeam handleCreate ={handleCreate}/> */}
    <TeamTable teams = {teams} handleDelete = {handleDelete} handleSubmitUpdate = {handleSubmitUpdate} />
    </>

  );
}

