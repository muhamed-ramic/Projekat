export function GetLokacije() {
	return dispatch=>{
        return fetch('/api/lokacije')
        .then(res=>res.json())
        .then(json=>{
        	dispatch(GetUsersSuccess(json));
        	return json;
        })
	};
}
export const GetUsersSuccess = podaci=>({
	type:"GET_Lokac",
    payload:podaci
})
  
