import React from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import {logOut} from "../../api";


function Header(props) {
    const {isFetching} = props.state

    const logout = () =>{
        document.cookie = 'CookiesToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

  return (
    <div>
        <div className='Name'>
            RSS List
        </div>
        <div className='Header'>
            <a className='News' href='/'>
                NEWS
            </a>
            <div>
                {!isFetching ?
                <a href='/login' className='Log'>
                    Login
                </a> : 
                <div>
                {props.state.role === "admin"  ? <a href='/admin' className='Log'>Admin Panel</a> : null}
                <a onClick={logout} href='/' className='Log'>
                    Logout
                </a>
                </div>
                }
            </div>
        </div>
    </div>
  )
}
const mapStateToProps = state => {return {state: state.dataReducerStates}};

export default connect(mapStateToProps) (Header)
