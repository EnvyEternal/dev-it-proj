import React, { useEffect } from 'react'
import { useState} from 'react'
import Rsscomponent from '../../modules/rsscomponent'
import './Stylersslist.css'
import Header from '../header'
import Footer from '../footer'
import { getRss, updatePost } from '../../api'
import Search from '../search'
import Select from '../select'
import CreatePost from '../createPost'
import {connect} from "react-redux";

function RssList(props) {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [categories, setCategories] = useState()
  const [editing, setEditing] = useState(false)
  const [phrase, setPhrase] = useState('')
  const [selectForm, setSelectForm] = useState()
  const [creating, setCreating] = useState(false)
  const {isFetching} = props.state

  const getNews = () =>{
    getRss(page, phrase, selectForm).then((res) => setData(res.data))
    }

  const delPost = () =>{
    setTimeout(() => {
      getNews()
    }, 10)
  
  }

  const list = (data) =>{
    return  <Rsscomponent key={data.id} data={data} delPost={delPost} getCategories={getCategories}/>
  }

  const listcat = (data, index) =>{
    const allCategories = categories.categories
    const needCategories = data
  
    const removeCategories = () => {
      //this.setState({ arr: this.state.arr.filter((item, i) => index !== i)
      const delElem = setCategories(...allCategories, allCategories.filter((item, i)=>index !==i))
      setCategories({...categories, delElem})
      allCategories.splice(allCategories.indexOf(allCategories.find((allCategories)=> allCategories === needCategories)),1)
    }
    return <div className='cat' key={index}>{data}<div onClick={removeCategories} className='x'>╳</div></div>
  }
  
  const searchPhrase = (data) =>{
   setPhrase(data)
   getNews()
  }

  const callSelect = (data) =>{
    if(data === 'none'){
      return setSelectForm(undefined)
    }else{
      return setSelectForm([data]), setSelectForm([data])
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;

    setCategories({
      ...categories,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const data = {
      categories
    };
    const dataForSend = data.categories
    if(window.confirm("Do you wont save?")) {
    updatePost( dataForSend)
    setEditing(false)
    setTimeout(() => {
      getNews()
    }, 10)}
  };
  const canceledPost = () =>{
    setCreating(false)
  }

  const getCategories = (data) =>{
    setEditing(true)
    setCategories(data)
  }

  const canceled = () =>{
    setEditing(false)
    setTimeout(() => {
      getNews()
    }, 10)
  }

  const create = () =>{
    setCreating(!creating)
  }

    useEffect(()=>{
      getNews()
    }, [page, selectForm, phrase])

    const next = () =>{
      setPage(page+1)
    }
    
    const prev = () =>{
      if(page >= 1){
        setPage(page-1)
      }else{
        setPage(1)
      }
    }

  return (<>
        <Header />
        <div className='control'>
          <Search  searchPhrase = {searchPhrase}/>
          <Select callSelect={callSelect}/>
        </div>
        {creating? <CreatePost canceledPost={canceledPost} /> : null}
    {isFetching ? <button onClick={create} className='button-edit'>Create Post</button> : null}
        <div>{editing ? 
          <div className='edit-form-back'>
            <div className='edit-form'>
              <form onSubmit={handleSubmit}>
                <label className='edit'>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required 
                    value={categories.title}
                    onChange={handleChange}
                  />
                  <div className='categories'>
                    {categories.categories.map(listcat)}
                  </div>
                  <input
                    type="text"
                    name="contentSnippet"
                    placeholder="Content"
                    required 
                    value={categories.contentSnippet}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="img"
                    placeholder="img-link"
                    required 
                    value={categories.img}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="link"
                    placeholder="link-news"
                    required 
                    value={categories.link}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="creator"
                    placeholder="Author"
                    required 
                    value={categories.creator}
                    onChange={handleChange}
                  />
                </label>
              <button type="submit" className='button-edit'>Save</button>
            </form>
            <button onClick={canceled} className='button-edit'>Canceled</button>
            </div>
        </div> : null}</div>
        <div className='rsslist'>{data.map(list)}</div>
        <div className='buttons'>
            {page > 1 ? <div className='button' onClick={prev}>Prev</div> : null}
            <div className='button' onClick={next}>Next</div>
        </div>
        <Footer />
    </>);
  
}

const mapStateToProps = state => {return {state: state.dataReducerStates}};

export default connect(mapStateToProps) (RssList)
