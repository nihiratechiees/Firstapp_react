import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return ( 
        <div>
            <h1>Admin Dashboard</h1>
            <br></br>
            <Link to={"profile"}>Profile</Link>
            <br></br>
            <Link to={"setting"}>Settings</Link>
            <Outlet></Outlet>
        </div>
     );
}
 
export default Dashboard;