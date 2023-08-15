import React , {useState} from 'react'
import axios from "axios"
const Signin = () => {
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:9000/api/v1/users/login",{
      name, password
    })
}
  return (
    <>
      <form action="POST">
                    <input type="names"  name="name" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                    <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <input type="submit" onClick={onSubmit} />

                </form>
    </>
  )
}

export default Signin