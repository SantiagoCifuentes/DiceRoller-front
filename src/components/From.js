import React, { useState,Fragment } from 'react'
import { connect } from 'react-redux';
import { fetchDado } from '../actions';

 const From= (props) =>{

  const [state, setState] = useState();
    const onSubmit = (e) => {
      e.preventDefault();
      props.dispatch(fetchDado(state));
    };
   


    return  <Fragment>
    <form onSubmit={onSubmit}>
    <h1>Lanza el dado</h1>
    <p>Dale click al botón para lanzar un dado</p>
    <button type="submit" onClick={fetchDado}>Lanzar dado</button>
    </form>
  </Fragment>
  
}

const stateMapToPros = state => {
    return {
      loading: state.view.loading
    }
}
  
  
export default connect(stateMapToPros)(From)