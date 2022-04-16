import React from 'react'
import { connect } from 'react-redux'
import './Headertyle.css'

function Header(props) {
    const {isFetching} = props.state

    const logout = () =>{
        document.cookie = 'CookiesToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

  return (
    <div className='header-container'>
        <div className='Name'>
            RSS List
        </div>
        <div className='Header'>
            <a className='News' href='/'>
                NEWS
            </a>
            <div className='admin-header'>
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
