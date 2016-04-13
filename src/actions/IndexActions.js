import * as types from './ActionTypes';
import Fetch from '../config/Fetch'



export function getList(data){
  return {
    type : types.INDEX_LIST,
    data : data
  }
}


export function getIndexData(url , obj){
 return (dispatch , getstate ) => {

  Fetch(url).then( (res) => {
    return dispatch(getList(res))
  })

 }
}
