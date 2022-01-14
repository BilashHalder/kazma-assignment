import React, { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { FetchResult } from "./Action/Action";
import Cal from './Calculator';


const keypad = [["7", "8", "9", "+"], ["6", "5", "4", "-"], ["3", "2", "1", "*"], [".", "0", "=", "/"]];

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const { result } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const setInput = (val) => {
    dispatch({ type: "SET_INPUT", payload: val });
  };

  const getResult = () => {
    isChecked ? dispatch(FetchResult(result)) : dispatch({ type: "SET_CALCULATE_RES", payload: Cal(result).toString() });
  }


  return (
    <div style={{marginTop:"40px"}} >
      <div style={{ textAlign: "center" }}>
        <label> <input type="checkbox" checked={isChecked} data-testid="inputcheckbox" onClick={() => { setIsChecked(!isChecked); }} /> Use Api </label>
      </div>

      <div className='cal'>
        <div style={{ textAlign: "center" }}>
          <input type="text" className='disply' data-testid="display" value={result} disabled />
        </div>

        <div className='keypad'>
          {
            keypad.map((item) => {
              return <div className='row'>
                {
                  item.map((data, key) => {
                    if (key == 3)
                      return <button data-testid={data} className='operator' onClick={() => { setInput(data) }}>{data}</button>
                    else if (data == "=")
                      return <button data-testid={data} onClick={() => { getResult(data) }}>{data}</button>
                    else
                      return <button data-testid={data} onClick={() => { setInput(data) }}>{data}</button>
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
