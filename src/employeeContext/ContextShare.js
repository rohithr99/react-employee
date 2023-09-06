import React, { createContext, useState } from 'react'

//create context object
export const registerContext = createContext();

const ContextShare = ({children}) => {

    //state for registerContext
    const [registerData, setRegisterData] = useState('');

  return (
    <div>

    <registerContext.Provider value={{registerData, setRegisterData}}>
        {children}
    </registerContext.Provider>

    </div>
  )
}

export default ContextShare