import React from 'react'
import Footer from '../footer'
import Header from '../header'
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