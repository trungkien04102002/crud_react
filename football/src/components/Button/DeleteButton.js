export default function DeleteButton({handleDeleteClick}){
    return (
        <><button onClick = {handleDeleteClick}class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Delete </button></>
    )
}