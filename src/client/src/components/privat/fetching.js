import React from 'react'
import { connect } from 'react-redux';
import ErrorPage from '../../modules/errorPage';

function Fetching(props) {
    const {isFetching} = props.state

  return (
        <>
        {isFetching ? <ErrorPage/> : props.component }
        </>
  )
}

const mapStateToProps = state => {return {state: state.dataReducerStates}};

export default connect(mapStateToProps) (Fetching)
