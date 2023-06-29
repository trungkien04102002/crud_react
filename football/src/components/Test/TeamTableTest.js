import { useState,useEffect } from "react";
import UpdateButton from "../Button/UpdateButton" 
import DeleteButton from "../Button/DeleteButton"
import UpdateTeam from "../Team/UpdateTeam";
import PaginationTest from "./PaginationTest";
import axios from "axios";
export default function TeamTableTest({handleDelete, handleSubmitUpdate}){ 
    const [data, setData] = useState([])
    const [editingTeam, setEditingTeam] = useState(null);
    const [curPage, setCurPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [pageSize, setPageSize] = useState(5); // default page size is 10
    const handleUpdate = (team) => {
        setEditingTeam(team);
    };
    
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:5000/teams?pageSize=${pageSize}&page=${curPage}`);
        setData(response.data.teams) ;
        setTotalPage(response.data.pageInfo.numPages);
    };  
    useEffect(() => {
        fetchData();
      }, [curPage,pageSize]);
      
    const handleSave = async () => {
      setEditingTeam(null);
    };

    return(
        <div className="overflow-x-auto">
            <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div className="container mx-auto flex-col flex justify-center">
                    <div className="w-full ">
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">ID</th>
                                        <th className="py-3 px-6 text-left">Name</th>
                                        <th className="py-3 px-6 text-center">Short Name</th>
                                        <th className="py-3 px-6 text-center">Abbr</th>
                                        <th className="py-3 px-6 text-center">Logo</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                {data.map((data) => (
                                <tr key={data.id}>
                                    <td className="py-3 px-6 text-left">{data.id}</td>
                                    <td className="py-3 px-6 text-left">{data.name}</td>
                                    <td className="py-3 px-6 text-center">{data.shortName}</td>
                                    <td className="py-3 px-6 text-center">{data.abbr}</td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex justify-center">
                                        <img src={data.logo} alt={data.name} className="w-16 h-16 object-contain" />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex justify-center">
                                            <UpdateButton handleUpdate={handleUpdate} team={data}/>
                                            <DeleteButton handleDelete={(id) => handleDelete(data.id)}/>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-center">
                            <PaginationTest setCurPage = {setCurPage} totalPage = {totalPage} pageSize={pageSize} setPageSize={setPageSize}/>
                    </div>
                </div>
            </div>
            {editingTeam && (
                <UpdateTeam
                    team={editingTeam}
                    handleSubmitUpdate={handleSubmitUpdate}
                    handleSave={handleSave}
                    handleCancel={() => setEditingTeam(null)}
                />
            )}
        </div>
    )
}

// I want the table size of the table is equal the  <div className="container mx-auto flex-col flex justify-center">