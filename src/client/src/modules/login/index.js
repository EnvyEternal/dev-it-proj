import React, { useState } from 'react'
import Header from '../header';

import './Stylelogin.css'
import { connect } from 'react-redux';
import { createData } from '../../redux/actions/index.js'
import {login} from "../../api";



function Login(props) {
  const {createDataAction} = props

    const [data, setData] = useState({
        login: "",
        password: "",
      })
    const [err, setErr] = useState()

      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const adminData = {
          login: data.login,
          password: data.password,
        };
        login(adminData).then(() => {
             document.location.href = "http://localhost:3000"
         }).catch(()=>{setErr('Wrong Data')
        });
      };

  return (
    <div>
      <Header/>
      <div className='LoginForm'>
          <form onSubmit={handleSubmit}>
              <div className='Form'>
                <div>
                  If you have accaunt for administrate this app
                </div>
                <div className='Err'>{err}</div>
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
    </div>
  )
}

const mapStateToProps = state => {return {state: state.dataReducerStates}};

 const mapDispatchToProps = dispatch => {
     return{
         createDataAction: data => {
             dispatch(createData(data));
         }
     };
 };


 export default connect(mapStateToProps, mapDispatchToProps) (Login)