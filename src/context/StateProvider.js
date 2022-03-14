import { createContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext()
//This is the provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// export const useStateValue = () => useContext(StateContext)