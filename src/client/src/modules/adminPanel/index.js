import React, {useEffect, useState} from 'react'
import Header from '../header'
import Footer from "../footer";
import './StyleAdminPanel.css'
import {allModerator, createModerator, deleteModerator} from '../../api/index'

function AdminPanel() {
    const [data, setData] = useState({
        login: "",
        password: "",
        role: "Moderator"
    })
    const [moderators, setModerators] = useState('')
    const [load, setLoad] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };
    const handleChangeSelect = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            role: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const createData = {
            login: data.login,
            password: data.password,
            role: data.role
        };
        createModerator(createData)

        setTimeout(()=>{
            getAll()
        }, 10)
    };

    const getAll = () =>{
       allModerator().then( data =>{
            setModerators(data.data)
            setLoad(true)
        })
    }

    useEffect(()=>{
        getAll()

    },[])

    const mapModerators = (i, index) =>{
        const deleteMod = () =>{
            deleteModerator(i.id)
            setTimeout(()=>{
                getAll()
            }, 10)
        }
        return (<div key={index} className='container-users'>
                    <div>ID: {i.id} </div>
                    <div>Login: {i.login}</div>
                    <div>Role: {i.role}</div>
                    <div onClick={deleteMod} className='delete'>Delete</div>
                </div>)
    }

  return (
      <>
          <Header/>
          <div className='container-admin'>
              <div className='all-users-container'>
                  <div>List Users</div>
                  {load ? moderators.map(mapModerators) : null}
              </div>
              <form onSubmit={handleSubmit} className='form-create'>
                  <div className='form-create'>
                      <div>
                          Form for create moderator
                      </div>
                      <select onChange={handleChangeSelect}>
                          <option value='Moderator'>Moderator</option>
                          <option value='admin'>Admin</option>
                      </select>
                      <label>
                          <input
                              type="text"
                              name="login"
                              className='Border'
                              placeholder="Login"
                              value={data.login}
                              required
                              onChange={handleChange}
                          />
                      </label>
                      <label>
                          <input
                              type="password"
                              name="password"
                              className='Border'
                              placeholder="Password"
                              required
                              value={data.password}
                              onChange={handleChange}
                          />
                      </label>
                      <button type="submit" className='Enter'>Login</button>
                  </div>
              </form>
          </div>
          <Footer/>
      </>
  )
}

export default AdminPanel