import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:9000/api/v1/users/register",{
                email,password,name
            })
           
            .then(res=>{
                console.log(email,password,name);
                if(res.data=="exist"){
                    alert("User already exists")
                }
        
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        

        }
        catch(e){
            console.log(e);

        }

    }

    return (
        <>
            <div className="login">

                <h1>Signup</h1>

                <form action="POST">
                    <input type="names" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <input type="submit" onClick={submit} />

                </form>

                <br />
                <p>OR</p>
                <br />

                <Link to="/">Login Page</Link>
            </div>
        </>
    )
}

export default Register