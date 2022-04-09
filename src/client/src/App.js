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
import { useCookies } from "react-cookie";
import AdminPanel from './modules/adminPanel';
import EditPost from './modules/edit';
import Role from './components/privat/role';
import Fetching from './components/privat/fetching';

function App(props) {
  const {createDataAction, deleteDataAction} = props
  const [cookies] = useCookies();

  useEffect(()=>{
    restart(cookies).then((res)=>createDataAction(res.data))
    if(cookies.token === undefined){
      deleteDataAction()
    }
  },[])


  return (
    <>
    <Routes>
      <Route path="/" element={<RssList />} />
      <Route path="/login" element={<Fetching component = {<Login />} />} /> 
      <Route path="/admin" element={<Role component = {<AdminPanel/>}/>}/>
      <Route path="/edit" element={<EditPost/>}/>
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
