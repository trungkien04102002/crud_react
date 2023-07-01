import { useState, useEffect } from "react";
import VisitButton from "../Button/VisitButton";
import axios from "axios";

export default function TeamTable({teams}) {
    console.log('kkkk',teams)
//   const [teams, setTeams] = useState([]);
//   useEffect(() => {
//     async function fetchTeam() {
//       const response = await axios.get("http://localhost:5000/teams");
//       setTeams(response.data.teams);
//       console.log("1234", teams);
//     }
//     fetchTeam();
//   }, []);
  //   const team = {
  //     id: 1,
  //     name: "Arsenal",
  //     shortName: "Arsenal",
  //     logo: "https://resources.premierleague.com/premierleague/badges/rb/t3.svg",
  //     abbr: "ARS",
  //     stadium: {
  //       id: 1,
  //       name: "Emirates Stadium",
  //       city: "London",
  //       capacity: 60272,
  //       teamId: 1,
  //     },
  //   };

  return (
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">
            Premier League Clubs
          </h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden ">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="  px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Club
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stadium
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    View fixures
                  </th>
                </tr>
              </thead>
              <tbody>
                {teams?.map((team) => (
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                          <img
                            class="w-full h-full rounded-full"
                            src={team.logo}
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {team.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap text-center">
                        {`${team.stadium.name}, ${team.stadium.city}`}
                      </p>
                      <p class="text-gray-900 whitespace-no-wrap text-center">
                        {`Capacity: ${team.stadium.capacity}`}
                      </p>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="flex items-center float-right">
                        <div class="mr-3">
                          <p class="text-gray-900 whitespace-no-wrap text-right">
                            <VisitButton />
                          </p>
                        </div>
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
  );
}
