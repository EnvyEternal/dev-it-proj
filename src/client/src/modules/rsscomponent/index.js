import React, { useState } from 'react'
import './Stylersscomponents.css'
import { connect } from 'react-redux';
import { delNews } from '../../api/index.js';
import { useCookies } from "react-cookie";


function Rsscomponent(props) {
    const {data, delPost, getCategories} = props
    const editData = data
    const [cookies] = useCookies();

    const edit = () =>{
      getCategories(editData, true)
    }

    const postDel = () =>{
      if(window.confirm('Do You Wont Delete This Post?'))
      {
        delPost(data.id)
        delNews(data.id, cookies)
      }
    }
    

  return (
    <div className='container'>
      <p className='title'>{data.title}</p>
      <div className='categories'>
        <div className='categoirsname'>Categories:
        </div>{data.categories.map((u,index)=>{
          return <div key={index} className='infoCat'>
                    <div className='textCat'>{u}</div>
                  </div>
            }
          )
        }</div>
      <div className='Main-info'>
        <img className='img' src={data.img}/>
        <div className='TextLink'>
          <div className='contentSnippet'>{data.contentSnippet.slice(0, -12)}</div>
          <a className='Link' href={data.link}>Read the full story here.</a>
        </div>
      </div>
      <div>
        <div className='Footer-Card'>
          <div className='Creator'>Author: {data.creator}</div>
            {props.state.role === 'admin' || props.state.role === 'Moderator' ? 
            <div>
               <div className='DelButton'>
                <div className='Button' onClick={edit}>Edit</div>
              </div>
              <div className='DelButton'>
                <div className='Button' onClick={postDel}>Delete Post</div>
              </div>
            </div>
            : null}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {return {state: state.dataReducerStates}};

 export default connect(mapStateToProps) (Rsscomponent)
