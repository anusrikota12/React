import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
    const { username } = useContext(UserContext);
    return (
        <nav>
            <h1>My React App</h1>
            <p>Welcome, {username}!</p>
        </nav>
    );
}
export default Navbar;