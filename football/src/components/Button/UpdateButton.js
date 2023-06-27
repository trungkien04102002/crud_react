const handleClick = () => {
    alert('Update team!')
}

export default function UpdateButton(){
    return (
        <><button onClick = {handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Update </button></>
    )
}