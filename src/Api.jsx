import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './REDUX/Actions/Actions';
const Api = () => {
    let ApiData=useSelector(state=>state.ApiReducer.api);
    let pagesCount=useSelector(state=>state.ApiReducer.pages);
    let dispatch=useDispatch();
    useEffect(
      ()=>{
        dispatch(fetchData())
      }
    ,[])
    console.log(ApiData,pagesCount);
  return (
    <div>
      hello Api
    </div>
  )
}

export default Api
