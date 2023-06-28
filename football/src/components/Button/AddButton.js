import { useNavigate } from 'react-router-dom' 
export default function AddButton({handleCreate}){
    // onclick = {() => {navigate('/Team')}}
    const navigate = useNavigate()
    const handleClick = () => navigate('/Team')
    return (
        <><button onClick={handleClick} class="ml-16 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> CREATE NEW TEAM! </button></>
    )
}

