export default function UpdateButton({handleUpdate,team}){
    const handleClick = () => {
        handleUpdate(team);
      };
    return (
        <><button onClick = {handleClick}class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Update </button></>
    )
}