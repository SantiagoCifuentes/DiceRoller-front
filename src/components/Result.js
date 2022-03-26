import React from 'react'
import { connect } from 'react-redux';
import uno from '../imgs/dice1.png'
import dos from '../imgs/dice2.png'
import tres from '../imgs/dice3.png'
import cuatro from '../imgs/dice4.png'
import cinco from '../imgs/dice5.png'
import seis from '../imgs/dice6.png'

const Result = (props) => {
  
    let imagen= ''

    switch (props.result) {
        case 1:
            imagen = uno
            break;
        case 2:
            imagen = dos
        case 3:
            imagen = tres
            break;
        case 4:
            imagen = cuatro
            break;
        case 5:
            imagen = cinco
            break;
        case 6:
            imagen = seis
            break;        
    
        default:
            break;
    }

  return <div>
      <img src={imagen} alt=""/>
     {props.result && 'Resultado: '+ props.result} 
  </div>
}


const stateMapToPros = state => {
  return {
    result: state.random.result?.valor
  }
}


export default connect(stateMapToPros)(Result)
