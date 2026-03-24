import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();
    return (
        <>
            <div className="text-center text-3xl p-3 font-bold bg-gray-500 text-white">User: {id}</div>
        </>
    )
}

export default User;