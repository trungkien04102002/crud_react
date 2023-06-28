import { useState } from "react";
<script src="https://cdn.tailwindcss.com"></script>

export default function UpdateTeam({ team, handleSave, handleCancel,handleSubmitUpdate }){
    const [id, setId] = useState(team.id);
    const [name, setName] = useState(team.name);
    const [shortName, setShortName] = useState(team.shortName);
    const [abbr, setAbbr] = useState(team.abbr);
    const [logo, setLogo] = useState(team.logo);
  
    const handleSubmit = (event) => {
      handleSubmitUpdate(event)
      handleSave();
    };

    return(
        <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold mb-6 text-center">UPDATE TEAM!</h1>
            <form onSubmit = {(event) => handleSubmit(event)} 
                class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">ID</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="id" name="id" value = {id} placeholder=""/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="name" name="name" value = {name} placeholder="" 
                onChange={(event) => setName(event.target.value)}/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Short name</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="shortname" name="shortName" value = {shortName} placeholder=""
                onChange={(event) => setShortName(event.target.value)}/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Abbr</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="abbr" name="abbr" value ={abbr} placeholder=""
                onChange={(event) => setAbbr(event.target.value)}/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Logo</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="logo" name="logo" value={logo} placeholder=""
                onChange={(event) => setLogo(event.target.value)}/>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
            </form>
        </div>
    )
}


