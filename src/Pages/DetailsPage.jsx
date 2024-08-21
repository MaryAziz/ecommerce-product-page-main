import { useParams } from 'react-router-dom'
import React from 'react'

function DetailsPage(){
  const{id}=useParams();
  return (
    <div >more details about prouduct</div>
  )
}

export default DetailsPage