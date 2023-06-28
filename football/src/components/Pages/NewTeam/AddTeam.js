import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { createTeam } from "../../../apis/teamApi";
import { useNavigate } from 'react-router-dom' 
<script src="https://cdn.tailwindcss.com"></script>

export default function AddTeam(){
    const navigate = useNavigate()
    const handleCreate = async (event) =>{
        event.preventDefault();
        const newTeam = {
          name: event.target.elements.name.value || "new name",
          shortName: event.target.elements.shortName.value || "new short name",
          abbr: event.target.elements.abbr.value || "new abbr",
          logo: event.target.elements.logo.value || "new logo",
        };
        await createTeam(newTeam)
        navigate('/')
      }
    return(
        <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold mb-6 text-center">CREATE A NEW TEAM!</h1>
            <form onSubmit={(event) => handleCreate(event)}
                class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="name" name="name" placeholder="" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Short name</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="shortname" name="shortName" placeholder="" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Abbr</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="abbr" name="abbr" placeholder="" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Logo</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="logo" name="logo" placeholder="" />
            </div>
            
            <button
                class="w-full bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                type="submit">Create</button>
            </form>
        </div>
    )
}



