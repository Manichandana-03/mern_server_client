import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'


const Read = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState("")

 async function getData(){
    const response = await fetch("http://localhost:4000");
    const data = await response.json();
    console.log("data fetched",data);
    if(response.ok){
        setData(data);
        setError("");
    }else{
        setError(data.error);
    }
 }

 useEffect(()=>{
    getData();
 },[]);

 const onDeleteClick =async(id)=>{

    const url = `http://localhost:4000/${id}`;
    const options = {
        method:'DELETE',
    };
    const response = await fetch(url,options);
    const data = await response.json();
    console.log(data);
    if(response.ok){
        setError('Deleted Successfully');
        setTimeout(()=>{
            setError("");
            getData();
        },1000)
    }

 }

  return (
    <>
    
    <div className='read-container' id="allposts">
        {error && <div className='error'>{error}</div>}
        <ul className='cards'>
            {data?.map((ele)=>(
                <li key={ele._id} className='li-container'>
                    <div className='card'>
                        <h5 className='name'>{ele.name}</h5>
                        <h6 className='email'>{ele.email}</h6>
                        <p>{ele.age}</p>
                        <button type="button" onClick={()=>{onDeleteClick(ele._id)}}>Delete</button>
                        <Link to={`/${ele._id}`} >Edit</Link>
                    </div>
                </li>
            ))}
        </ul>

    </div>
    </>
  )
}

export default Read