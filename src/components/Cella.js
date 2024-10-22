import React, { useContext } from 'react'
import './Cella.css'
import { KattContext } from '../context/KattContext'

function Cella(props) {

   const {katt} =useContext(KattContext)
   function kattintas() {
    katt(props.index)
}

  return (
    <div className={props.jel? 'cella fel':'cella le'} onClick={()=>kattintas()}>
      
    </div>
  )
}

export default Cella