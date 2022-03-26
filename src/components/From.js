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
    <form className='d-flex flex-column bd-highlight mb-3' onSubmit={onSubmit}>
    <h1 className="text-primary text-center" >Lanza el dado</h1>
    <p className="text-primary text-center" >Dale click al botón para lanzar un dado</p>
    <button className="btn btn-primary mx-auto "  type="submit" onClick={fetchDado}>Lanzar dado</button>
    </form>
  </Fragment>
  
}

const stateMapToPros = state => {
    return {
      loading: state.view.loading
    }
}
  
  
export default connect(stateMapToPros)(From)