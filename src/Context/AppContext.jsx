import { createContext, useEffect, useReducer } from "react";
import { autos } from "../Components/utils/data";


export const GlobalContext = createContext()

const AppContext = ({children}) => {

    const initialState = {
        autos:[],
        publicaciones:[]
    }

    const reducer = (state, action) => {
        switch(action.type){
                case "GET_AUTOS":
                return {...state, autos: action.payload}
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type:"GET_AUTOS", payload: autos})
    },[])

    console.log(state.autos)

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext