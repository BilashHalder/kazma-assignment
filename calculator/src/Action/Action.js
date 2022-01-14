//Example of Redux thumb
export const FetchResult=(params)=>{
    return async(dispatch)=>{
        //Base API URL
        var apiurl="http://localhost:8080/";

        //split the input expression operator and operands
        const expression= (params.split (/([^0-9.]+)/));
        var a=expression[0];
        var operator=expression[1];
        var b=expression[2];
        var op= operator=='-'?op="sub": operator=='+'?op="add":operator=='*'?op="mul":op="div";
        //send API request 
        const response= await fetch(`${apiurl}?a=${a}&b=${b}&op=${op}`);
        const result=await response.json();
        dispatch({type:'SET_CALCULATE_RES',payload:result.c.toString()})
    }
}