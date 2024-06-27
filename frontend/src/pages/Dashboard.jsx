import { useState, useEffect } from "react";


export default function(){

    const [records, setRecords] = useState([]);

    useEffect(() => {
        console.log("hello");
    },[])

    return(<>
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Visible</th>
                    <th>Categories</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </>)
}