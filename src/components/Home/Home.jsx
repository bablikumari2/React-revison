
import {Link} from "react-router-dom"
import "./Home.css"
export const Home=()=>{
    return(
        <div>
            <div className="nav">
                <Link to="registration/one">Go to Registration</Link>
                <Link to="/users">Go to users pages</Link>
            </div>
            <div>
                <h1 className="home">Welcome Home page</h1>
            </div>
        </div>
    )
}