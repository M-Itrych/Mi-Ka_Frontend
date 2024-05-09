import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PrivateRoutes = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        

        if (token) {
            axios.post('http://127.0.0.1:5000/api/authenticate', null,{
                headers: {
                    Authorization: `${token}`
                }
            })
            .then(_ => {
                setIsLoggedIn(true);
            })
            .catch(_ => {
                console.error('Token is invalid or expired');
                setIsLoggedIn(false);
            });
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    return(
        isLoggedIn ? <Outlet/> : <h2>Unauthorized!</h2>
    )
}

export default PrivateRoutes;