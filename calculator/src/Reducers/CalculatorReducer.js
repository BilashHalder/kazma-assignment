import {createReducer} from '@reduxjs/toolkit';

const initstate={result:""}

export default createReducer(initstate,(builder)=>{
   
    //Update Store after each inputs givn byy user
    builder.addCase('SET_INPUT',(state,action)=>{
      state.result=state.result.concat(action.payload) 
    });

    //Set Result into the store after api call
    builder.addCase('SET_CALCULATE_RES',(state,action)=>{
        state.result=action.payload;
    });
})
