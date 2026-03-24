import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});

    // useEffect(() => {
        // fetch('https://api.github.com/users/chauhan-harsh630')
        // .then(response => response.json())
        // .then(data => {
            // console.log(data);
            // setData(data);
        // })
    // },[])

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                
                {/* Header Section */}
                <div className="bg-gray-500 px-6 py-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between">
                    <h2 className="text-3xl font-extrabold text-white text-center sm:text-left mb-4 sm:mb-0">
                        GitHub Profile
                    </h2>
                    <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 shadow-sm">
                        <span className="text-white font-semibold flex items-center gap-2">
                            Followers: <span className="text-2xl">{data.followers || 0}</span>
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row p-6 sm:p-10 gap-8 items-center md:items-start">
                    
                    {/* Image Area */}
                    <div className="shrink-0 flex flex-col items-center">
                        <img 
                            src={data.avatar_url} 
                            alt="Git profile" 
                            className="rounded-full w-48 h-48 sm:w-60 sm:h-60 object-cover shadow-lg border-4 border-gray-100" 
                        />
                        <h2 className="mt-6 text-2xl font-bold text-gray-800 text-center">
                            {data.name || "Loading..."}
                        </h2>
                    </div>

                    {/* Stats/Details Area */}
                    <div className="grow w-full">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 h-full">
                            <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4">
                                Bio
                            </h3>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                {data.bio || "No bio provided."}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                                    <span className="text-gray-500 font-medium whitespace-nowrap mr-4">Following</span>
                                    <span className="text-xl font-bold text-gray-800">{data.following}</span>
                                </div>
                                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                                    <span className="text-gray-500 font-medium whitespace-nowrap mr-4">Public Repos</span>
                                    <span className="text-xl font-bold text-gray-800">{data.public_repos}</span>
                                </div>
                                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                                    <span className="text-gray-500 font-medium whitespace-nowrap mr-4">Public Gists</span>
                                    <span className="text-xl font-bold text-gray-800">{data.public_gists}</span>
                                </div>
                                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                                    <span className="text-gray-500 font-medium whitespace-nowrap mr-4">Joined</span>
                                    <span className="text-md font-bold text-gray-800 text-right">
                                        {data.created_at ? new Date(data.created_at).toLocaleDateString() : ""}
                                    </span>
                                </div>
                                <div className="sm:col-span-2 flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                                    <span className="text-gray-500 font-medium whitespace-nowrap mr-4">Last Updated</span>
                                    <span className="text-md font-bold text-gray-800 text-right">
                                        {data.updated_at ? new Date(data.updated_at).toLocaleDateString() : ""}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Github