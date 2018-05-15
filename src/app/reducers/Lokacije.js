const initialState = {
  LokacijeNiz:[]
};

const Lokacije = (state=initialState,action)=>{
  switch (action.type) {
        case "GET_Lokac":
          state={
            ...state,
            LokacijeNiz:action.payload
          };
            break;
         
      }
   return state;
};
export default Lokacije;