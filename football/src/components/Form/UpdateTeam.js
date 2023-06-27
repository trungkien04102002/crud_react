<script src="https://cdn.tailwindcss.com"></script>
export default function UpdateTeam(){
    return(
        <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold mb-6 text-center">UPDATE TEAM!</h1>
            <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="name" name="name" placeholder=""/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Short name</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="shortname" name="shortname" placeholder=""/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Abbr</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="abbr" name="abbr" placeholder=""/>
            </div>


            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Logo</label>
                <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="logo" name="logo" placeholder=""/>
            </div>
            
            
            
            <button
                class="w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                type="submit">Update</button>
            </form>
        </div>
    )
}


