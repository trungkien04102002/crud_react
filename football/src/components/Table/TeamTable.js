import UpdateButton from "../Button/UpdateButton" 
import DeleteButton from "../Button/DeleteButton"
export default function TeamTable({teams}){ 
    return(
        <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">ID</th>
                                <th class="py-3 px-6 text-left">Name</th>
                                <th class="py-3 px-6 text-center">Short Name</th>
                                <th class="py-3 px-6 text-center">Abbr</th>
                                <th class="py-3 px-6 text-center">Logo</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                        {teams.map((team) => (
                        <tr key={team.id}>
                            <td className="py-3 px-6 text-left">{team.id}</td>
                            <td className="py-3 px-6 text-left">{team.name}</td>
                            <td className="py-3 px-6 text-center">{team.shortName}</td>
                            <td className="py-3 px-6 text-center">{team.abbr}</td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex justify-center">
                                <img src={team.logo} alt={team.name} className="w-16 h-16 object-contain" />
                                </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                            <div className="flex justify-center">
                                <UpdateButton />
                                <DeleteButton />
                            </div>
                        
                             </td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}


