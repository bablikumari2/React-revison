
import { useContext,useState } from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { RegistrationContext } from "../RegistrationContext/RegistrationContext";
import "./Form.css"
export const Formone=({children})=>{
    const[form,setForm] = useState({})
    const navigate = useNavigate();
    const handleChange=(e)=>{
     const{id,value}=e.target;
     setForm({...form,[id]: value})
    }

    const {objfun,obj} =useContext(RegistrationContext)

    const onclickfun = ()=>{
        objfun(form)
        navigate("/registration/two")
    }
    return(
        <div>
            <Link to = "/">Go to Home</Link>
            <div className="f1_div">
                <label>Name:</label>
                <input type= "text" placeholder="Enter your Name" id="name" onChange={handleChange}></input>

                <label>Age:</label>
                <input type="number" placeholder="Enter your Age" id ="age" onChange={handleChange}></input>
                <label>Date of Birth:</label>
                <input type="number" placeholder="Enter your birth" id ="dob" onChange={handleChange}></input>

                <button disabled={form.name==undefined || form.age==undefined || form.dob==undefined} onClick={onclickfun}>Next</button>
            </div>
        </div>
    )
    }