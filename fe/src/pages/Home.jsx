import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
function Home() {
    const [data, setdata] = useState([])
    useEffect(() => {
        const token= Cookies.get('token')
        fetch('http://localhost:3000/user', {
            headers: {Authorization: `${token}`}
          })
             .then(resp => resp.json())
             .then(json => setdata(json)) 
    }, [])
    console.log(data);
  return (
    <div style={{display:"flex",gap:"30px"}}>{data.map((x)=>(
        <div style={{width:"200px",border:"1px solid black"}} key={x._id}>
        <h1>{x.email}</h1>
        <h3>{x.role}</h3>
        </div>
    ))}

    </div>
  )
}

export default Home