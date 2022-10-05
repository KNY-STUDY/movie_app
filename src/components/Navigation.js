import { Link } from "react-router-dom";
import "./css/Navigation.css"

function Navigation() {
    return (
        <div className="nav">
            <Link to="/" className="nav_btn">Home</Link>
        </div>
    );
}

export default Navigation;