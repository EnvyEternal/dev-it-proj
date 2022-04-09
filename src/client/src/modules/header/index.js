import React from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import { useCookies } from "react-cookie";


function Header(props) {
    const {isFetching} = props.state
    const [cookies, removeCookie] = useCookies();
    const logout = () =>{
        removeCookie('token')
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
