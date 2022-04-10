import './App.css';
import RssList from './modules/rsslist';
import Login from './modules/login';
import {
  Routes,
  Route
} from "react-router";
import { useEffect } from 'react';
import {restart} from './api/index.js'
import { connect } from 'react-redux';
import { createData, deleteData } from './redux/actions/index.js'
import AdminPanel from './modules/adminPanel';
import Role from './components/privat/role';
import Fetching from './components/privat/fetching';

function App(props) {
  const {createDataAction, deleteDataAction} = props

  useEffect(()=>{
    restart().then((res)=>createDataAction(res.data))
  },[])


  return (
    <>
    <Routes>
      <Route path="/" element={<RssList />} />
      <Route path="/login" element={<Fetching component = {<Login />} />} /> 
      <Route path="/admin" element={<Role component = {<AdminPanel/>}/>}/>
    </Routes>
    </>
  )
    
}

const mapStateToProps = state => {return {state: state.dataReducerStates}};

 const mapDispatchToProps = dispatch => {
     return{
         createDataAction: data => {
             dispatch(createData(data));
         },
         deleteDataAction : () =>{
           dispatch(deleteData())
         }
     };
 };


 export default connect(mapStateToProps, mapDispatchToProps) (App)
