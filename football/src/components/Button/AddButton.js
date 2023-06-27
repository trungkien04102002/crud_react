export default function AddButton(){
    const handleClick = () => {
        alert('Create new team!')
    }
    return (
        <><button onClick={handleClick} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> CREATE NEW TEAM! </button></>
    )
}