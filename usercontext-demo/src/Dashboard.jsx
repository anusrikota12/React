import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
    const { username } = useContext(UserContext);
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Hello {username}, welcome to your dashboard!</p>
        </div>
    );
}
export default Dashboard;