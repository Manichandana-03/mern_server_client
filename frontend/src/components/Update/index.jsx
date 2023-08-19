import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState("");
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  //receving single user data
  const getSingleData = async () => {
    const response = await fetch(`http://localhost:4000/${id}`);
    const result = await response.json();

    if (response.ok) {
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    }
  };

  //passing edited data to backend
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age };
    console.log(updatedUser);
    const response = await fetch(`http://localhost:4000/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const result = await response.json();
    if (response.ok) {
      console.log("updated result..", result);
      setError("");
      navigate("/all");
    }
    if (!response.ok) {
      console.log(response.error);
      setError(response.error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);



  return (
    <>
    
    <div className='main-container'>
       <div className='app-container'>
        <h1>Create Post</h1>
        {error && <div className='error'>{error}</div>}
        <form onSubmit={handleUpdate}>
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
            <button type="submit">Update</button>
            
        </form>
       </div>
    </div>
    </>
  )
  
};

export default Update;