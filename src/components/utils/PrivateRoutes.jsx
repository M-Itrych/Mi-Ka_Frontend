import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({isLoggedIn}) =>{
    console.log(isLoggedIn)
    return(
        isLoggedIn ? <Outlet/> : <Navigate to="/admin"/>
    )
}

export default PrivateRoutes;