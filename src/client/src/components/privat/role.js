import React from 'react'
import { connect } from 'react-redux';
import ErrorPage from '../../modules/errorPage';

function Role(props) {
    const role = props.state.role

  return (
        <>
        {role === "admin" ? props.component : <ErrorPage/> }
        </>
  )
}

const mapStateToProps = state => {return {state: state.dataReducerStates}};

export default connect(mapStateToProps) (Role)
