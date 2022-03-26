import React, { useState,Fragment } from 'react'
import { fetchDado } from '../actions';

export const From= (props) =>{

  const [state, setState] = useState();
    const onSubmit = (e) => {
      e.preventDefault();
      props.dispatch(fetchDado(state));
    };
   


    return  <Fragment>
    <form onSubmit={onSubmit}>
    <h1>Lanza el dado</h1>
    <p>Dale click al botón para lanzar un dado</p>
    <button type="submit" onClick={fetchDado()}>Lanzar dado</button>
    </form>
  </Fragment>
  
}

export default From;