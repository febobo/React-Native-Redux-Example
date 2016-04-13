// 定义全局api
const remoteApi = 'http://ms-api.ys.wn518.com';

function Fetch(url , obj){

  let defaultObj = {
    method : 'GET'
  }

  if(typeof obj === 'object'){
    Object.assign(defaultObj , obj)
  }
  const promise = new Promise( (resolve , reject) => {
    fetch(remoteApi + url , defaultObj).then( (res)=> {
      if(!res.ok){
         resolve({code : -110 , message : '当前网络不佳,请检查网络'})
      }
      res.json().then( (res)=> {
        if(res && res.code == 1){
          resolve(res.data);
        }
      });

    }).catch(function(error) {
      console.log(error.message);
  });

  })
  return promise
}

export default Fetch;
