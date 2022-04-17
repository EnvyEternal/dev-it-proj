import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import './Errorstyle.css'

function ErrorPage() {
  return (
    <>
    <Header/>
    <div className='error'>
        Page not found 404
    </div>
    <Footer/>
    </>
  )
}

export default ErrorPage