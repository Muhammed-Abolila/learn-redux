import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi2 } from './REDUX/Actions/Actions';

const Api2 = () => {
  let Api2Data=useSelector(state=>state.Api2Reducer.api2);
  let dispath=useDispatch();
  useEffect(
    ()=>{
      dispath(fetchApi2())
    }
    ,[])
  console.log(Api2Data);
  return (
    <div>
      Hello Api 2
    </div>
  )
}

export default Api2
