import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Create = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [age, setAge] = useState(0);
     const [error, setError] = useState("");

    const navigate = useNavigate();

    const createForm =async(e)=>{
        e.preventDefault();
        const userData = {name,email,age};
        console.log("USER DATA",userData);

        const url = "http://localhost:4000/"
        const options ={
            method:'POST',
            headers:{
            "Content-Type":"application/json",
            },
            body: JSON.stringify(userData),
        }
        const response = await fetch(url,options);
        const result = await response.json();
        if(response.ok){
            console.log("RESULT",result);
            setName("");
            setEmail("");
            setAge(0);
            setError("");
            navigate("/all");
        }else{
            console.log(result.error);
            setError(result.error);
        }
}

  return (
    <>

    <div className='main-container' id="create">
       <div className='app-container'>
        <h1>Create Post</h1>
        {error && <div className='error'>{error}</div>}
        <form onSubmit={createForm}>
            <label htmlFor='name'>Name</label>
            <br />
            <input type='text' placeholder='Enter the name' id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <br />
            <label htmlFor='email'>Email</label>
            <br />
            <input type='email' placeholder='Enter the email' id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <br />
            <label htmlFor='age'>Age</label>
            <br />
            <input type='number' placeholder='Enter the age' id="age" value={age} onChange={(e)=>{setAge(e.target.value)}} />
            <br />
            <button type="submit">Submit</button>
            
        </form>
       </div>
    </div>
    </>
  )
}

export default Create