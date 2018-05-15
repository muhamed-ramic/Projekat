const initialState = {
  result:1,
  lastValues:[]
};

const Mathreducer = (state = initialState,action) => {
  switch (action.type) {
      case "ADD":
          state = {
            ...state,
            result:state.result+action.payload,
            lastValues:[...state.lastValues,action.payload]

         };
        // state.lastValues.push(action.payload);
          break;
      case "SUBTRACT":
          state = {
              ...state,
              result:state.result-action.payload,
            lastValues:[...state.lastValues,action.payload]

          }
         //state.lastValues.push(action.payload);
          break;
  }
  return state;
};
export default Mathreducer;
