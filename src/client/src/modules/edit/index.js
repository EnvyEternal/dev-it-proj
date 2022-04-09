import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import Header from '../header'

function EditPost() {
    const [data, setData] = useState({
        login: "",
        password: "",
      })
    
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
    };
    const editAx = (data) =>{
        console.log(data)
    }
  return (
    <>
        <Header/>
        
    </>
  )
}

export default EditPost

/*<div>
            <label>
                <input
                    type="text"
                    name="password"
                    className='Border'
                    placeholder="Password"
                    required 
                    value={data.password}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="text"
                    name="password"
                    className='Border'
                    placeholder="Password"
                    required 
                    value={data.password}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="text"
                    name="password"
                    className='Border'
                    placeholder="Password"
                    required 
                    value={data.password}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="text"
                    name="password"
                    className='Border'
                    placeholder="Password"
                    required 
                    value={data.password}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="text"
                    name="password"
                    className='Border'
                    placeholder="Password"
                    required 
                    value={data.password}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="text"
                    name="password"
                    className='Border'
                    placeholder="Password"
                    required 
                    value={data.password}
                    onChange={handleChange}
                />
            </label>
            <button type="submit" className='Enter'>Login</button>
        </div> */