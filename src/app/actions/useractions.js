export function setName(name){
	return dispatch=>{
		setTimeout(()=>{
        //after the 2000ms this callback gets exec here
         dispatch({
          type:"SET_NAME",
          payload:name
         });
		},2000)
	} 

}

export function setAge(age){
	return{
         type:"SET_AGE",
         payload:age
	};
}