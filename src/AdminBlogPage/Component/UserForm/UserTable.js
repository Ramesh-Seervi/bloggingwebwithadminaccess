import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get, remove } from 'firebase/database';
import '../../../firebase/config.js';
import UserFormdata from './UserFormdata.js';
import './UserTable.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const db = getDatabase();

function UserTable() {
    const [data, setData] = useState({});
    const [one, setOne] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const apiRef = ref(db, 'user');
            try {
                const snapshot = await get(apiRef);
                if (snapshot.exists()) {
                    setData(snapshot.val());
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [one]);

    const Deleteid = (id) => {
        const userRef = ref(db, 'user/' + id);
        remove(userRef)
            .then(() => {
                toast.success("Data deleted successfully!");
                console.log('Data deleted successfully');
                setOne(one + 1); // Refresh the data after deletion
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    };

    return (
        <div style={{ display: 'flex', margin: 20 }}>
            <div style={{ flex: 1 }}>
                <UserFormdata setOne={setOne} />
            </div>
            <div style={{ flex: 3 }}>
                <div className="app-container">
                    <h1 className="app-title">User Data</h1>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Mobile Number</th>
                                <th>Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map((key) => (
                                <tr key={key}>
                                    <td>{data[key].name}</td>
                                    <td>{data[key].age}</td>
                                    <td>{data[key].gender==1?'Male':"Female"}</td>
                                    <td>{data[key].mobile_number}</td>
                                    <td>{data[key].position}</td>
                                    <td>
                                        <button onClick={() => Deleteid(key)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>        
            <ToastContainer />
        </div>
    );
}

export default UserTable;
